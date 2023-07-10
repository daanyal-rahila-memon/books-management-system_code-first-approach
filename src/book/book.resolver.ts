import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Book } from "./schema/book.schema";
import { Book as BookModel } from "../graphql"
import { BookService } from "./book.service";
import { AddBookArgs } from "./args/add.book.args";

@Resolver(of => Book)   // This resolver is responsible for 'Book' Schema
export class BookResolver {

    constructor(private readonly bookService: BookService) {}

    @Query(returns => [Book], { name: "books" })   // returns a Book Array; 2nd parameter tells that getAllBooks will be called as 'books' instead
    getAllBooks() : BookModel[] {
        return this.bookService.findAllBooks();
    }

    @Query(returns => Book, { name: "findBookById", nullable: true })   // if the function not find any book with the provided id then null object will be returned, and to tell the graphql about this we have mentioned nullable: treu
    GetBookById(@Args({ name: "bookId", type: () => Int }) id: number) : BookModel {
        return this.bookService.findBookById(id);
    }

    @Mutation(returns => String, { name: "deleteBook", nullable: true })
    deleteBookById(@Args({ name: "bookId", type: () => Int}) id: number) : string {
        return this.bookService.deleteBook(id);
    }

    @Mutation(returns => String)
    addBook(@Args("addBookArgs") addBookArgs : AddBookArgs) : string {
        return this.bookService.addBook(addBookArgs)
    }

    @Mutation(returns => String, { name: "updateBook", nullable: true })
    updateBook(@Args({ name: "bookId", type: () => Int}) id: number, @Args("updateBookArgs") updateBookArgs : AddBookArgs) : string {
        return this.bookService.updateBook(id, updateBookArgs);
    }
}