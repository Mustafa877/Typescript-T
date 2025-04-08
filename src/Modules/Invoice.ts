// src/Modules/Invoice.ts
import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) {
    if (amount <= 0) {
      throw new Error('Amount must be greater than 0');
    }
  }

  getDetails(): string {
    return this.details;
  }

  format(): string {
    return `${this.client} owes £${this.amount.toFixed(2)} for ${this.details}`;
  }
}
