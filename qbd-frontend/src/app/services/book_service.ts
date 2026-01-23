import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
    providedIn: 'root'
})

export class BookService {
    private apiUrl = '/api/books';
    constructor(private http:HttpClient) {}

    getBooks(page: number, size: number, tags: string[]):Observable<{ content: Book[], totalPages: number}>{
        let params = new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString());
        tags.forEach(tag => params = params.append('tags', tag));
        return this.http.get<{ content:Book[], totalPages: number}>(this.apiUrl, { params });
   }

    getBookById(id: String){
        return this.http.get<Book>(`${this.apiUrl}/${id}`);
    }
    
}

