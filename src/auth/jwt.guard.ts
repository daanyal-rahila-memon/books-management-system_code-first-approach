import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtGuard implements CanActivate {
  // to implement guard, we have to implement an interface 'CanActivate' and it's method 'canActivate()' as well
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext(); // getting GraphQL ExecutionContext from GqlExecutionContext
    console.log(ctx.req);
    const authorizationHeader = ctx.req.headers.authorization; // getting the authorizationHeader from the context
    if (authorizationHeader) {
      const token = authorizationHeader.split(' ')[1]; // we're splitting the authorizationHeader, coz before space (" ") there's a keyword mentioned in the authorizationHeader which is "bearer", and after that we have token; so we have to split the authorizationHeader to get the token
      try {
        const user = jwt.verify(token, 'key');
        ctx.user = user;
        console.log(user);
        return true;
      } catch (error) {
        throw new HttpException(
          'Invalid Token' + error.message,
          HttpStatus.UNAUTHORIZED,
        );
      }
    } else {
      return false;
    }
  }
}
