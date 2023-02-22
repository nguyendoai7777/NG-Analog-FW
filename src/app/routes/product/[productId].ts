import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { injectActivatedRoute } from '@analogjs/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

const paramsInjector = (id: string) => injectActivatedRoute().paramMap.pipe(
  map(param => param.get(id))
);

@Component({
  selector: 'app-product',
  standalone: true,
  template: `
    this is product {{detailId$ | async}}


  `,
  styles: [
    `
    `,
  ],
  imports: [
    RouterOutlet,
    RouterLink,
    AsyncPipe
  ]
})
export default class ProductDetailComponent {
  readonly detailId$ = paramsInjector('productId');
}
