import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from '../models/book';

@Injectable({
    providedIn: 'root'
})

export class BookService {
    private apiUrl = '/api/books';

    constructor(private http:HttpClient) {}

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.apiUrl).pipe(
            tap((books: Book[])=> {console.log('Book from server:', books)})
        );
    }
    
}

