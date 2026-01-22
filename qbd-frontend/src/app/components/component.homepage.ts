import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { app_book_list } from "./component.book_list";
import { app_book_filter } from "./component.filter";

@Component({
  selector: 'app-startpage',
  imports: [app_book_list, app_book_filter],
  standalone: true,
  templateUrl: './component.homepage.html',
  styleUrl: './component.homepage.css'
})
export class app_startpage {
  title = 'startpage';
}