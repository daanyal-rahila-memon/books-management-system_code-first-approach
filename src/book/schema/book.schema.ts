import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()   // it tells that this is a schema of Book
export class Book {
    @Field((type) => Int)   // This represents a column/field of Int/number in GraphQL
    id: number;

    @Field()    // by default it represents a column/field of string in GraphQL
    title: string;

    @Field((type) => Int)
    price: number;
}