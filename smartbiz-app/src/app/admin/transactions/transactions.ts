import { Component } from '@angular/core';
import { CustomerService, Customer } from '../../core/services/customer';
import { ProductService, Product } from '../../core/services/product';
import { TransactionService, Transaction } from '../../core/services/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.html',
  standalone: false,
  styleUrls: ['./transactions.css']
})
export class Transactions {
  customers: Customer[] = [];
  products: Product[] = [];

  selectedCustomerId: number | null = null;
  selectedProductId: number | null = null;
  quantity: number = 1;
  total: number = 0;

  transactions: Transaction[] = [];

  constructor(
    private customerService: CustomerService,
    private productService: ProductService,
    private transactionService: TransactionService
  ) {
    this.customers = this.customerService.getCustomers();
    this.products = this.productService.getProducts();
    this.transactions = this.transactionService.getTransactions();
  }

  calculateTotal() {
    const product = this.products.find(p => p.id === this.selectedProductId);
    if (product) {
      this.total = product.price * this.quantity;
    }
  }

  addTransaction() {
    if (this.selectedCustomerId && this.selectedProductId && this.quantity > 0) {
      this.transactionService.addTransaction({
        customerId: this.selectedCustomerId,
        productId: this.selectedProductId,
        quantity: this.quantity,
        total: this.total,
        date: new Date(),
      });

      // Refresh transaction list
      this.transactions = this.transactionService.getTransactions();

      // Reset form
      this.selectedCustomerId = null;
      this.selectedProductId = null;
      this.quantity = 1;
      this.total = 0;
    }
  }

  getCustomerName(id: number): string {
    return this.customers.find(c => c.id === id)?.name || 'Unknown';
  }

  getProductName(id: number): string {
    return this.products.find(p => p.id === id)?.itemName || 'Unknown';
  }
}
