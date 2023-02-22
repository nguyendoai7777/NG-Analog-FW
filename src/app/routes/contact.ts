import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-product',
  standalone: true,
  template: `
    <h2>Contact Page1</h2> --
    <mat-tab-group color="accent">
      <mat-tab label="First"> Content 1</mat-tab>
      <mat-tab label="Second"> Content 2</mat-tab>
      <mat-tab label="Third"> Content 3</mat-tab>
    </mat-tab-group>
  `,
  styles: [
    `
      ::ng-deep .mdc-tab.mat-mdc-tab .mdc-tab__content .mdc-tab__text-label {
        color: #fff;
      }
      @media (prefers-color-scheme: light) {
        ::ng-deep .mdc-tab.mat-mdc-tab .mdc-tab__content .mdc-tab__text-label {
          color: #000;
        }
      }

    `,
  ],
  imports: [
    MatTabsModule
  ]
})
export default class ContactComponent {}
