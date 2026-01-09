import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './component.header.html',
})
export class app_header {
  title = 'header';
}