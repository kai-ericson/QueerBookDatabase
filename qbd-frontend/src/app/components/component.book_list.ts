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
    books = signal<Book[]>([]);
    
    constructor(private bookService: BookService) {
        effect(() => {
            this.bookService.getBooks().subscribe({
                next: data => this.books.set(data)
            });
        });
    }
}