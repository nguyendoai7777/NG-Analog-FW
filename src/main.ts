import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideFileRouter, routes } from '@analogjs/router';

import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

console.log(routes);

void bootstrapApplication(AppComponent, {
  providers: [
    provideFileRouter(),
    provideAnimations()
  ],
});
