import { Routes } from '@angular/router';
import { app_startpage } from './components/component.homepage';
import { book_details } from './components/component.book_details';

export const routes: Routes = [
    {path: '',redirectTo: 'books', pathMatch: 'full'},
    {path: 'books', component: app_startpage},
    {path: 'books/:id', component: book_details}
];
