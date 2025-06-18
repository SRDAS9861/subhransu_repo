import { Injectable } from '@angular/core';

export interface Transaction {
  id: number;
  customerId: number;
  productId: number;
  quantity: number;
  total: number;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [];

  private nextId = 1;

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  addTransaction(transaction: Omit<Transaction, 'id'>) {
    const newTransaction: Transaction = {
      id: this.nextId++,
      ...transaction,
    };
    this.transactions.push(newTransaction);
  }

  clearAll() {
    this.transactions = [];
    this.nextId = 1;
  }
}
