import { Component } from '@angular/core';
import { defineRouteMeta } from '@analogjs/router';

export const routeMeta = defineRouteMeta({
  title: 'Page not found',
})

@Component({
  selector: 'app-product',
  standalone: true,
  template: `
    -- <h2>Page Not Found</h2> --

  `,
  styles: [
    `
    `,
  ],
})
export default class PageNotFoundComponent {}
