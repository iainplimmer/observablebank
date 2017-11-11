import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h3>{{title}}</h3>
  <app-balance></app-balance>
  <app-deposit></app-deposit>
  <app-transaction-list></app-transaction-list>
  `
})
export class AppComponent {
  title = 'The Observable Bank of RXJS';
}
