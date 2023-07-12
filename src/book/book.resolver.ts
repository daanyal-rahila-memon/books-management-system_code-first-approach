// based on book.schema.ts --> book.resolver.ts will be made
// Resolvers are to be registered as providers in the module

import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './schema/book.schema';
import { BookService } from './book.service';
import { AddBookArgs } from './args/addbook.args';
import { UpdateBookArgs } from './args/updatebook.args';

@Resolver((of) => Book) // This resolver is responsible for 'Book' Schema
export class BookResolver {
  // Resolvers interaact with Service layer, so have to inject Service Layer... (Resolvers -> Services -> Repositories (created by TypeORM) -> Database driver (pg) -> PostgreSQL)
  constructor(private readonly bookService: BookService) {}

  @Query((returns) => [Book], { name: 'books' }) // returns a Book Array; 2nd parameter tells that getAllBooks will be called as 'books' instead
  getAllBooks() {
    return this.bookService.findAllBooks();
  }

  @Query((returns) => Book, { name: 'bookById', nullable: true }) // if the function not find any book with the provided id then null object will be returned, and to tell the graphql about this we have mentioned nullable: treu
  GetBookById(@Args({ name: 'bookId', type: () => Int }) id: number) {
    return this.bookService.findBookById(id);
  }

  @Mutation((returns) => String, { name: 'deleteBook', nullable: true })
  deleteBookById(@Args({ name: 'bookId', type: () => Int }) id: number) {
    return this.bookService.deleteBook(id);
  }

  @Mutation((returns) => String, { name: 'addBook' })
  addBook(@Args('addBookArgs') addBookArgs: AddBookArgs) {
    return this.bookService.addBook(addBookArgs);
  }

  @Mutation((returns) => String, { name: 'updateBook', nullable: true })
  updateBook(@Args('updateBookArgs') updateBookArgs: UpdateBookArgs) {
    return this.bookService.updateBook(updateBookArgs);
  }
}
