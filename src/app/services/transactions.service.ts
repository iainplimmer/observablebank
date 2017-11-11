import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Transaction } from './../types/transaction';

@Injectable()
export class TransactionsService {
  
  private transactions = new BehaviorSubject<Transaction[]>([]);
    
  //  Returns the current balance for the account, this can be subscribed to, and anywhere that has this subscription
  //  will immediately get a value returned once the stream is updated.
  GetBalance() : Observable<number> {
    return new Observable(observer => {      
      this.transactions.subscribe(x => { 

        let sum = x.map((t) => {
          return t.Amount;
        }).reduce((a, b) => a + b, 0);

        observer.next(sum);
      });
    });     
  }

  //  Allows a deposit to be made on the account. Simply adds the value to the account.
  MakeDeposit(transactionAmount: number) {
    const t = new Transaction(transactionAmount, 'Internet Deposit');
    const transactionsList = [t, ...this.transactions.value];
    this.transactions.next(transactionsList);
  }

  //  Returns the list of transactions that are applied to an account. We use observable as we don't want this list to be
  //  mutated anywhere except for in this service.
  GetTransactions() : Observable<Transaction[]> {
    return this.transactions.asObservable();
  }

  constructor() { 
    //  First create an empty account
    let i: Transaction = new Transaction(0, 'Opening Balance');
    let j: Transaction = new Transaction(1, 'Gift from the bank for a new account!');
    this.transactions.next([i,j]);
  }

}
