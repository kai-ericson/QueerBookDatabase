import { Component, effect, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, filter } from 'rxjs/operators';
import { Observable, of, tap } from 'rxjs';
import { BookService } from '../services/book_service';
import { Book } from '../models/book';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector:'app_book_filter',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './component.filter.html',
styleUrl: './component.filter.css'
})
export class app_book_filter{

}
