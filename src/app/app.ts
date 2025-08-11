import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "primeng/button";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Button
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('base-tailwind');

  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('my-app-dark');
  }
}
