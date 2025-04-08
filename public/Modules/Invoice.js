export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        if (amount <= 0) {
            throw new Error('Amount must be greater than 0');
        }
    }
    getDetails() {
        return this.details;
    }
    format() {
        return `${this.client} owes £${this.amount.toFixed(2)} for ${this.details}`;
    }
}
