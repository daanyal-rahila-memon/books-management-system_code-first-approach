import { Query, Resolver } from '@nestjs/graphql';

@Resolver(of => String)
export class AppResolver {

  @Query(returns => String)
  getHello(): string {
    return 'Hello World!';
  }
}