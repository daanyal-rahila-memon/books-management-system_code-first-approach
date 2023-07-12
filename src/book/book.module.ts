import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entity/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [],
  providers: [BookService, BookResolver],
})
export class BookModule {}
