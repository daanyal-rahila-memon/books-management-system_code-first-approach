// services are to be registered as providers in the module

import { Injectable } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AddBookArgs } from './args/addbook.args';
import { UpdateBookArgs } from './args/updatebook.args';

@Injectable()
export class BookService {
  constructor(
    // Services interact with Repository, so have to inject Repository... (Services -> Repositories (created by TypeORM) -> Database driver (pg) -> PostgreSQL)
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {} // Repository of BookEntity has been initialized

  async findAllBooks(): Promise<BookEntity[]> {
    let books = await this.bookRepository.find();
    return books;
  }

  async findBookById(id: number): Promise<BookEntity> {
    let book = await this.bookRepository.findOne({ where: { id: id } });
    return book;
  }

  async addBook(addBookArgs: AddBookArgs): Promise<string> {
    let newBook: BookEntity = new BookEntity();
    newBook.title = addBookArgs.title;
    newBook.price = addBookArgs.price;

    let bookInserted = await this.bookRepository.save(newBook);
    return `${bookInserted} \n Above book has been saved successfully`;
  }

  async updateBook(updateBookArgs: UpdateBookArgs): Promise<string> {
    let bookToBeUpdated: BookEntity = await this.bookRepository.findOne({
      where: { id: updateBookArgs.id },
    });
    bookToBeUpdated.title = updateBookArgs.title;
    bookToBeUpdated.price = updateBookArgs.price;

    let updatedBook = await this.bookRepository.save(bookToBeUpdated);
    return `${updatedBook} \n Above book has been updated successfully`;
  }

  async deleteBook(id: number): Promise<string> {
    await this.bookRepository.delete(id);
    return 'Book has been deleted successfully';
  }
}

// Now as the service has been created; it's the time to make the resolver for it
