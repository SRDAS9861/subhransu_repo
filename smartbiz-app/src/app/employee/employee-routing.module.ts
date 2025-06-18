import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Dashboard } from './dashboard/dashboard'; // Adjust path as needed
import { AddCustomer } from './add-customer/add-customer';
import { MakeSale } from './make-sale/make-sale';
import { ViewProducts } from './view-products/view-products';
import { AuthGuard } from '../core/guards/auth-guard';
import { Transactions } from '../admin/transactions/transactions';

const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: 'add-customer', component: AddCustomer },
      { path: 'make-sale', component: MakeSale },
      { path: 'view-products', component: ViewProducts },
      { path: '', redirectTo: 'add-customer', pathMatch: 'full' } ,
      { path: 'transactions', component: Transactions, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
