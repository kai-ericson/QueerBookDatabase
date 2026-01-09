import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './component.homepage.html',
  styleUrl: './component.homepage.css'
})
export class app_startpage {
  title = 'startpage';
}