export class Transaction {

    readonly Date: Date;
    readonly Amount: number;
    readonly DepositMadeBy: string;

    constructor(amount: number, depositMadeBy: string) {
        this.Date = new Date();
        this.Amount = amount;
        this.DepositMadeBy = depositMadeBy;
    }
}