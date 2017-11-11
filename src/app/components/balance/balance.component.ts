import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TransactionsService} from './../../services/transactions.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-balance',
  template:`
  <p>Current Balance $ {{balance}}</p>
  `,
  encapsulation: ViewEncapsulation.None
})
export class BalanceComponent implements OnInit {

  //  Handle used to subscribe/unsubscribe from the balance observable.
  private _subscription: Subscription;

  //  Property used to present the balance on-screen
  private balance: number = 0;

  constructor(private TransactionsService: TransactionsService) { }

  //  Don't forget to tear down any subscriptions that are made
  ngOnDestroy() {
    this._subscription.unsubscribe();    
  }

  //  When the component initialises, we will want to subscribe to the balance observable
  ngOnInit() {
    this._subscription = this.TransactionsService.GetBalance().subscribe(x => {
      this.balance = x;
    }, (error) => {
      //  We can bubble up any errors here......      
    });
  }

}
