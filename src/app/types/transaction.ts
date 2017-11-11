export class Transaction {
    Date: Date;
    Amount: number;
    DepositMadeBy: string;

    constructor(amount: number, depositMadeBy: string) {
        this.Date = new Date();
        this.Amount = amount;
        this.DepositMadeBy = depositMadeBy;
    }
}