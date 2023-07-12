import { UseGuards } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from './auth/auth.guard';
import { User } from './user/entity/user.entity';

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
    return `User Authenticated Successfully! ${JSON.stringify(user)}`;
  }
}
