import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MomentModule } from 'angular2-moment';

import { AppComponent } from './components/app/app.component';
import { BalanceComponent } from './components/balance/balance.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';

import {TransactionsService} from './services/transactions.service';


@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    DepositComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MomentModule
  ],
  providers: [
    TransactionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
