import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true, // never be done 'true' in production
      autoSchemaFile: join(process.cwd(), "src/schema.graphql"),
      definitions: {
        // path: join(process.cwd(), "src/graphql.ts")  // to automatically generate the interface of Book Schema
        path: join(process.cwd(), "src/graphql.ts"),
      },
    }),
    BookModule
  ],
  controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule {}