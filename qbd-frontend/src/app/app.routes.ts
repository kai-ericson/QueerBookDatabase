import { Routes } from '@angular/router';
import { app_startpage } from './components/component.homepage'

export const routes: Routes = [
    {path: '',redirectTo: 'books', pathMatch: 'full'},
    {path: 'books', component: app_startpage}
];
