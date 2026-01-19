import { Component, effect, signal } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book_service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  templateUrl: './component.book_list.html',
  styleUrl: './component.book_list.css'
})
export class app_book_list{ 
    title = 'book-list';
    books: Book[] = [];
    currentPage = 0;
    pageSize = 10;
    totalPages= 0;
    
    constructor(private bookService: BookService) {
        this.loadBooks();
    }
    loadBooks(){
        this.bookService.getBooks(this.currentPage, this.pageSize)
        .subscribe(page => {
            this.books = page.content;
            this.totalPages = page.totalPages;
            this.currentPage = page.number;
        })
    }
    nextPage(){
        if(this.currentPage < this.totalPages - 1){
            this.currentPage++;
            this.loadBooks();
        }
    }
    prevPage(){
        if(this.currentPage > 0){
            this.currentPage --;
            this.loadBooks();
        }
    }
}