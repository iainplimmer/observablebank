import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import {TransactionsService} from './../../services/transactions.service';
import { isNumeric } from 'rxjs/util/isNumeric';

@Component({
  selector: 'app-deposit',
  template: `
  <div *ngIf="depositError">There is a error with the amount that we deposited!</div>  
  <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
  
    <mat-form-field class="example-full-width">
      <input placeholder="Deposit Amount" name="transaction" matInput ngModel required #transaction="ngModel" type="number"> 
    </mat-form-field>
    <button mat-raised-button *ngIf="f.valid">Deposit Amount</button>
  
  
  </form>
  `,
  encapsulation: ViewEncapsulation.None
})
export class DepositComponent {

  //  Stores if the value is invalid.
  depositError = false;

  constructor(private TransactionsService: TransactionsService) { 
    
  }

  //  When the form is submitted, we want to make the deposit if the amount is valid, just so happens RXJS has a 
  //  handy function available! Then we reset the form with the handle we already have.
  onSubmit(f: NgForm) {
    if (f.valid && isNumeric(f.value.transaction) ) {
      this.TransactionsService.MakeDeposit(f.value.transaction);
      f.reset();
    }
    else {
      this.depositError = true;
    }
  }  
}
