import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book_service';
import { CommonModule } from '@angular/common';
import { book_details } from './component.book_details';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, book_details],
  templateUrl: './component.book_list.html',
  styleUrl: './component.book_list.css'
})
export class app_book_list{ 
    title = 'book-list';
    books: Book[] = [];
    currentPage = 0;
    pageSize = 10;
    totalPages= 0;
    selectedBookId: string | null = null;
    
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

    openModal(id: string){
        console.log("Read more clicked, id: "+ id);
        this.selectedBookId = id;
    }

    closeModal() {
        this.selectedBookId = null;
    }
}