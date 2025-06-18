import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Customers } from './customers/customers';
import { Products } from './products/products';
import { Transactions } from './transactions/transactions';
import { Reports } from './reports/reports';

const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: 'customers', component: Customers },
      { path: 'products', component: Products },
      { path: 'transactions', component: Transactions },
      { path: 'reports', component: Reports },
      { path: '', redirectTo: 'customers', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
