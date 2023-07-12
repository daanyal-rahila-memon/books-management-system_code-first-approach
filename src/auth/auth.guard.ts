import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  // to implement guard, we have to implement an interface 'CanActivate' and it's method 'canActivate()' as well
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext(); // Guards will be applied on email and password; and to get email and password from the query, we'll need to get GraphQL ExecutionContext from GqlExecutionContext
    const { email, password } = ctx.req.body.variables; // we'll have 2 variables; email and password
    const user: User = await this.userService.findUserByEmail(email);
    if (user && user.password === password) {
      ctx.user = user;
      return true;
    } else {
      throw new HttpException('UnAuthenticated', HttpStatus.UNAUTHORIZED);
    }
  }
}
