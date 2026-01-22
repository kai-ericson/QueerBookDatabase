import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from '../models/book';
import { Page } from '../page';
import { tag } from '../tags/tag';

@Injectable({
    providedIn: 'root'
})

export class BookService {
    private apiUrl = '/api/books';

    constructor(private http:HttpClient) {}

    getBooks(
        page: number, 
        size: number, 
        tags: tag[]
    ): Observable<Page<Book>>{
        let params = new HttpParams()
        .set('page', page)
        .set('size', size);

        tags.forEach(tag => {
            params = params.append('tags', `${tag.type}:${tag.title}`);
        });
        return this.http.get<Page<Book>>(this.apiUrl, { params });
    }

    getBookById(id: String){
        return this.http.get<Book>(`${this.apiUrl}/${id}`);
    }
    
}

