import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
    <mat-toolbar-row>{{title}}</mat-toolbar-row>
  </mat-toolbar>
  <app-balance></app-balance>
  <app-deposit></app-deposit>
  <app-transaction-list></app-transaction-list>
  `
})
export class AppComponent {
  title = 'The Observable Bank of RXJS';
}
