import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { app_header } from './components/component.header';
import { app_startpage } from './components/component.homepage';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, app_header, app_startpage],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'qbd-frontend';
}
