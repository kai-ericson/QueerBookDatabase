import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './component.header.html',
  styleUrl: './component.header.css'
})
export class app_header {
  title = 'header';
}