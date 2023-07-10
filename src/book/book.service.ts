import { Injectable } from "@nestjs/common";
import { BookEntity } from "./entity/book.entity";

@Injectable()
export class BookService {
    public booksData: BookEntity[] = [];

    addBook(book: BookEntity): string {
        this.booksData.push(book);
        return `${book} This book has been added successfully`;
    }

    updateBook(id: number, updateBook: BookEntity) : string {
        let temp: BookEntity;
        for (let book = 0; book < this.booksData.length; book++) {
            if (this.booksData[book].id === id) {
                temp = this.booksData[book];
                this.booksData[book] = updateBook;
            }
        }
        return `${temp} has been successfully replaced by ${updateBook}`;
    }

    deleteBook(id: number) : string {
        this.booksData = this.booksData.filter((book) => book.id !== id);
        return "Book deleted successfully"
    }

    findBookById(id: number) : BookEntity {
        for (let book = 0; book < this.booksData.length; book)
        {
            if (this.booksData[book].id === id) {
                return this.booksData[book];
            }
        }
    }

    findAllBooks() : BookEntity[] {
        return this.booksData;
    }
}