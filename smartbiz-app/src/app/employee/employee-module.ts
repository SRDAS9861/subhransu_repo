import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard';
import { AddCustomer } from './add-customer/add-customer';
import { MakeSale } from './make-sale/make-sale';
import { ViewProducts } from './view-products/view-products';
import { FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';


@NgModule({
  declarations: [
    Dashboard,
    AddCustomer,
    MakeSale,
    ViewProducts
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
