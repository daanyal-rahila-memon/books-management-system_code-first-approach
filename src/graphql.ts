
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    title: string;
    price: number;
}

export interface UpdateBookArgs {
    id: number;
    title: string;
    price: number;
}

export interface Book {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    getHello(): string | Promise<string>;
    login(email: string, password: string): string | Promise<string>;
    securedResource(): string | Promise<string>;
    books(): Book[] | Promise<Book[]>;
    bookById(bookId: number): Nullable<Book> | Promise<Nullable<Book>>;
}

export interface IMutation {
    deleteBook(bookId: number): Nullable<string> | Promise<Nullable<string>>;
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    updateBook(updateBookArgs: UpdateBookArgs): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
