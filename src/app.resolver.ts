import { UseGuards } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from './auth/auth.guard';
import { User } from './user/entity/user.entity';
import * as jwt from 'jsonwebtoken';

@Resolver((of) => String)
export class AppResolver {
  @Query((returns) => String)
  getHello(): string {
    return 'Hello World!';
  }

  @Query((returns) => String)
  @UseGuards(AuthGuard)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    // we saved the logged-in user in context in 'ctx.user' variable in 'auth.guard.ts' file, we can access that by the following line
    @Context('user') user: User,
  ): string {
    // we'd have to store all the information of the logged-in user in jsonwebtoken...
    let payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };
    return jwt.sign(payload, 'key', { expiresIn: '60s' }); // jwt.sign() is a method to generate a token from the parameters passed in... payload is the information of the logged in user, "key" is the secret used to generate the token (it's recommended to keep the secret in .env file so that no one can see it and decrypt the token), and expiresIn is the time the token will expire in the future (To see the generated token copy it an paste at https://jwt.io)
  }
}
