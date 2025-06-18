import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dashboard } from './dashboard/dashboard';
import { Customers } from './customers/customers';
import { Products } from './products/products';
import { Transactions } from './transactions/transactions';
import { Reports } from './reports/reports';
import { AdminRoutingModule } from './admin-routing.module'; // ✅ Add this

@NgModule({
  declarations: [
    Dashboard,
    Customers,
    Products,
    Transactions,
    Reports
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule // ✅ Also import it
  ]
})
export class AdminModule { }
