import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://angular.io/" target="_blank">
        <img
          alt="Angular Logo"
          class="logo angular"
          src="/analog.svg"
        />
      </a>
    </div>

    <h1>Vite + Angular</h1>

    <div class="card">
      <button type="button" (click)="increment()">Count {{ count }}</button>
    </div>

  `,
  styles: [
    `
      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.angular:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
