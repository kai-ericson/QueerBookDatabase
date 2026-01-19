import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from '../models/book';
import { Page } from '../Page';

@Injectable({
    providedIn: 'root'
})

export class BookService {
    private apiUrl = '/api/books';

    constructor(private http:HttpClient) {}

    getBooks(page: number, size: number){
            return this.http.get<Page<Book>>(`${this.apiUrl}?page=${page}&size=${size}`);
    }

    getBookById(id: String){
        return this.http.get<Book>(`${this.apiUrl}/${id}`);
    }
    
}

