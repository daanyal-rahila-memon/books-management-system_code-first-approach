import { Query, Resolver } from "@nestjs/graphql";
import { Book } from "./book.schema";

@Resolver(of => Book)   // This resolver is responsible for 'Book' Schema
export class BookResolver {
    @Query(returns => [Book])   // returns a Book Array
    getAllBooks() {
        // return all books
        return [
            {id: 1, title: "Harry Potter", price: 500},
            {id: 2, title: "Hunger Games", price: 600},
            {id: 3, title: "Robin Hood", price: 900}
        ]
    }
}