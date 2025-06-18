import { Component } from '@angular/core';
import { CustomerService } from '../../core/services/customer';

interface Customer {
  id: number;
  name: string;
  mobile: string;
  address: string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.html',
  standalone: false,
  styleUrls: ['./customers.css']
})
export class Customers {
  customers: Customer[] = [];
  newCustomer: Customer = { id: 0, name: '', mobile: '', address: '' };
  editingCustomer: Customer | null = null;

  constructor(private CustomerService: CustomerService) {
    this.customers = this.CustomerService.getCustomers();
  }

  addCustomer() {
    const newId = this.customers.length + 1;
    const customer = { ...this.newCustomer, id: newId };
    this.CustomerService.addCustomer(customer);
    this.customers = this.CustomerService.getCustomers();
    this.newCustomer = { id: 0, name: '', mobile: '', address: '' };
  }

  startEdit(customer: Customer) {
    this.editingCustomer = { ...customer };
  }

  saveChanges() {
    if (!this.editingCustomer) return;
    this.CustomerService.updateCustomer(this.editingCustomer);
    this.customers = this.CustomerService.getCustomers();
    this.cancelEdit();
  }

  cancelEdit() {
    this.editingCustomer = null;
  }

  deleteCustomer(id: number) {
    this.CustomerService.deleteCustomer(id);
    this.customers = this.CustomerService.getCustomers();
  }
}
