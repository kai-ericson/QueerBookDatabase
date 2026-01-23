import { Component, effect, Input, Output, EventEmitter, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tag } from '../tags/tag';

@Component({
    selector:'app_book_filter',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './component.filter.html',
    styleUrl: './component.filter.css'
})
export class app_book_filter{
    @Input({ required: true }) availableTags: tag[] = [];
    @Input({ required: true }) selectedTagTitles: Set<string> = new Set();
    
   @Output() selectedTagsChange = new EventEmitter<Set<string>>();

   toggleTag(tag: tag){
        const updated = new Set(this.selectedTagTitles);
        updated.has(tag.title) 
        ? updated.delete(tag.title) 
        : updated.add(tag.title);
        this.selectedTagsChange.emit(updated);
       
    }
}
