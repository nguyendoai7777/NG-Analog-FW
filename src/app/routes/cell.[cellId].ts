import { Component } from '@angular/core';
import { injectActivatedRoute } from '@analogjs/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cell',
  standalone: true,
  template: `
    <h1>Cell Page</h1>
    <h2>Cell Page</h2>
    <h3>Cell Page</h3>
    <h4>Cell id {{cellId$ | async}}</h4>
    <h5>Cell Page</h5>
    <h6>Cell Page</h6>

  `,
  styles: [
    `
    `,
  ],
  imports: [
    AsyncPipe
  ]
})
export default class CellComponent {
  private route = injectActivatedRoute();

  readonly cellId$ = this.route.paramMap.pipe(
    map(p => p.get('cellId'))
  )
}
