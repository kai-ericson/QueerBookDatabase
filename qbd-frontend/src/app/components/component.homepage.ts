import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { app_book_list } from "./component.book_list";
import { app_book_filter } from "./component.filter";
import { BookService } from '../services/book_service';
import { Book } from '../models/book';
import { tag_type } from '../tags/tag_type';

@Component({
    selector: 'app-startpage',
    imports: [app_book_list, app_book_filter],
    standalone: true,
    templateUrl: './component.homepage.html',
    styleUrl: './component.homepage.css'
})
export class app_startpage {
    title = 'startpage';
    books: Book[] = [];
    currentPage = 0;
    pageSize = 10;
    totalPages= 0;
    selectedBookId: string | null = null;
    selectedTagTitles: Set<string> = new Set();
    availableTags = [{title: 'Achillean', type: 'Representation' as tag_type}, 
          {title: 'Trans', type: 'Representation' as tag_type},
          {title: 'Bisexual', type: 'Representation' as tag_type},
          {title: 'Aromantic', type: 'Representation' as tag_type},
          {title: 'Asexual', type: 'Representation' as tag_type},
          {title: 'Nonbinary', type: 'Representation' as tag_type},
          {title: 'Gay', type: 'Representation' as tag_type},
          {title: 'Polyamory', type: 'Representation' as tag_type},
          {title: 'Sapphic', type: 'Representation' as tag_type},
          {title: 'Contemporary', type: 'Genre' as tag_type},
          {title: 'Romance', type: 'Genre' as tag_type},
          {title: 'Manga', type: 'Genre' as tag_type},
          {title: 'Middle grade', type: 'Genre' as tag_type},
          {title: 'Urban fantasy', type: 'Genre' as tag_type},
          {title: 'Young adult', type: 'Genre' as tag_type},
          {title: 'Fantasy', type: 'Genre' as tag_type},
          {title: 'Historical', type: 'Genre' as tag_type},
          {title: 'Graphic novel', type: 'Genre' as tag_type}
      ];
      
    constructor(private bookService: BookService) {
        this.loadBooks();
    }
 
    loadBooks(){
        this.bookService
          .getBooks(
           this.currentPage, 
           this.pageSize, 
           Array.from(this.selectedTagTitles))
          .subscribe(page => {
           this.books = page.content;
           this.totalPages = page.totalPages;
           //this.currentPage = page.number;
         })
    }

    selectedTagsChange(tags: Set<string>){
      this.selectedTagTitles = tags;
      this.currentPage = 0;
      this.loadBooks();
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

    openBook(id: string){
      this.selectedBookId = id;
    }

    closeBook(){
      this.selectedBookId = null;
    }

}