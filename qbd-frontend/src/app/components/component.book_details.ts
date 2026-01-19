import { Component, effect, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, filter } from 'rxjs/operators';
import { Observable, of, tap } from 'rxjs';
import { BookService } from '../services/book_service';
import { Book } from '../models/book';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector:'app_book_details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './component.book_details.html',
    styleUrl: './component.book_details.css'
})
export class book_details{
    private bookService = inject(BookService);
    book$: Observable<Book> = this.fetchBook();

     @Input() set bookId(id: string) {
        console.log('Input setter called with: '+id);
        if(!id) return;
        this.book$ = this.bookService.getBookById(id);
    }
    @Output() closed = new EventEmitter<void>();

    constructor(){
        console.log('BookDetailModalComponent created');
    }

    fetchBook(): Observable<Book> {
        if(!this.bookId) return of(null as any);
        return this.bookService.getBookById(this.bookId).pipe(
            tap(() => console.log("Fetched book", this.bookId))
        );
    }

    close(){
        this.closed.emit();
    }
}