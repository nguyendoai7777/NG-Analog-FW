import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product',
  standalone: true,
  template: `
    <a routerLink="1">
      <button mat-stroked-button color="primary">Product 1</button>
    </a> |
    <a routerLink="2">
      <button mat-stroked-button color="accent">Product 2</button>
    </a> |
    <a routerLink="3">
      <button mat-stroked-button color="warn">Product 3</button>
    </a> |
    <a routerLink="4">
      <button mat-stroked-button color="primary">Product 4</button>
    </a> |

    <router-outlet></router-outlet>

  `,
  styles: [
    `
      :host {
        display: block;
        margin-top: 12px;
      }
    `,
  ],
  imports: [
    RouterOutlet,
    RouterLink,
    MatRippleModule,
    MatButtonModule
  ]
})
export default class ProductComponent {}
