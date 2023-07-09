import { Query, Resolver } from "@nestjs/graphql";

@Resolver("Book")
export class BookResolver {
    @Query('books')
    getAllBooks() {
        // return all books
        return [
            {id: 1, title: "Harry Potter", price: 500},
            {id: 2, title: "Hunger Games", price: 600},
            {id: 3, title: "Robin Hood", price: 900}
        ]
    }
}