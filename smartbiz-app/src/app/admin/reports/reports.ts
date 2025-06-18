import { Component } from '@angular/core';
import { CustomerService } from '../../core/services/customer';
import { ProductService } from '../../core/services/product';
import { TransactionService } from '../../core/services/transaction';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './reports.html',
  standalone: false,
  styleUrls: ['./reports.css'],
})
export class Reports {
  totalCustomers = 0;
  totalProducts = 0;
  totalSales = 0;
  totalTransactions = 0;

  constructor(
    private customerService: CustomerService,
    private productService: ProductService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.totalCustomers = this.customerService.getCustomers().length;
    this.totalProducts = this.productService.getProducts().length;

    const transactions = this.transactionService.getTransactions();
    this.totalTransactions = transactions.length;
    this.totalSales = transactions.reduce((sum, t) => sum + t.total, 0);
  }
}
