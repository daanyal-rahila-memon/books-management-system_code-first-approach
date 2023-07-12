// GraphQL will read this file and will generate schema in GraphQL automatically -- check src/graphql.ts
// This file will contain the properties of the entity files -- in this case: book.entity.ts
// For Further Detailed Information, this schema file contains those properties which you watnt to expose to the outer world -- frontend -- for instance we do save passwords in our entity file and database but don't want to expose them to frontend so we will not add 'password' field in this file

import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType() // it tells that this is a schema of Book
export class Book {
  @Field((type) => Int) // This represents a column/field of Int/number in GraphQL
  id: number;

  @Field() // by default it represents a column/field of string in GraphQL
  title: string;

  @Field((type) => Int)
  price: number;
}

// based on this book.schema.ts --> book.resolver.ts will be made
