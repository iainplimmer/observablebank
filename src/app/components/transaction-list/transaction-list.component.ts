import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TransactionsService } from './../../services/transactions.service';
import { Observable, Subscription } from 'rxjs';
import { Transaction } from './../../types/transaction';

@Component({
  selector: 'app-transaction-list',
  template: `
  <p>Transactions for this account</p>
  <ul>
    <li *ngFor="let item of transactions">
      {{item.Date | amDateFormat: 'DD-MM-YYYY, HH:mm:ss'}} - 
      $ {{item.Amount}} : {{item.DepositMadeBy}}
    </li>
  </ul>
  `,
  encapsulation: ViewEncapsulation.None
})
export class TransactionListComponent implements OnInit {

  //  Handle used to subscribe/unsubscribe from the balance observable.
  private _subscription: Subscription;
  
  //  Property used to present the transactions on-screen
  transactions: Transaction[];

  constructor(private TransactionsService: TransactionsService) { }

  //  When the component initialises, we will want to subscribe to the transactions observable
  ngOnInit() {
    this.TransactionsService.GetTransactions().subscribe(x=> {
      this.transactions = x;
    });
  }

    //  Don't forget to tear down any subscriptions that are made
    ngOnDestroy() {
      this._subscription.unsubscribe();    
    }

}

