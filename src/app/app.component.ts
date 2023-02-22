import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatIconModule, MatButtonModule],
  template: `

    <mat-toolbar color="accent">
      <a routerLink="/">
        <button mat-raised-button color="accent" class="example-icon" aria-label="Example icon-button with menu icon">
          Home
        </button>
      </a>
      <span class="example-spacer"></span>
      <a routerLink="product">
        <button mat-raised-button color="accent" class="" aria-label="Example icon-button with heart icon">
          Product
        </button>
      </a>
      <a routerLink="contact">
        <button mat-raised-button color="accent" class="" aria-label="Example icon-button with share icon">
          Contact
        </button>
      </a>
      <a routerLink="cell/1998">
        <button mat-raised-button color="accent" class="" aria-label="Example icon-button with share icon">
          Cell 1998
        </button>
      </a>
    </mat-toolbar>

    <router-outlet></router-outlet>
  `,
  styles: [
    `
      button {
        margin-right: 1em;
      }
    `,
  ],
})
export class AppComponent {}
