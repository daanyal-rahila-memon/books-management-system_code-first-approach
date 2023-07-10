
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Book {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    getAllBooks(): Book[] | Promise<Book[]>;
}

type Nullable<T> = T | null;
