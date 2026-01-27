import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { book_details } from '../book_details/component.book_details';
import { Book } from '../../models/book';

@Component({
    selector: 'app-book-list',
    standalone: true,
    imports: [CommonModule, book_details],
    templateUrl: './component.book_list.html',
    styleUrl: './component.book_list.css'
})
export class app_book_list{
    title = 'book-list';
    @Input({ required: true }) books: Book[] = [];
    @Input({ required: true }) totalPages: number = 0;
    @Input({ required: true }) currentPage: number = 0;

    selectedBookId: string | null = null;
    
    @Output() next = new EventEmitter<void>();
    @Output() prev = new EventEmitter<void>();
    @Output() openBook = new EventEmitter<string>();
    @Output() closeBook = new EventEmitter<void>();
    
  
    openModal(id: string){
        this.selectedBookId = id;
        this.openBook.emit(id);
    }

    closeModal() {
        this.selectedBookId = null;
        this.closeBook.emit();
    }

    nextPage(){
        this.next.emit();
    }

    prevPage(){
        this.prev.emit();
    }
}