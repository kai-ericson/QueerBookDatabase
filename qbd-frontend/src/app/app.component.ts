import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { app_header } from './components/header/component.header';
import { app_startpage } from './components/homepage/component.homepage';
import { app_footer } from "./components/footer/component.footer";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, app_header, app_startpage, app_footer],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'qbd-frontend';
}
