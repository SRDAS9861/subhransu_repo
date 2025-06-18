import { Injectable } from '@angular/core';

export interface Customer {
  id: number;
  name: string;
  mobile: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [
    { id: 1, name: 'Rajesh Kumar', mobile: '9876543210', address: 'Bhubaneswar' },
    { id: 2, name: 'Sunita Sahu', mobile: '8887654321', address: 'Cuttack' },
    { id: 3, name: 'Akash Das', mobile: '9090909090', address: 'Puri' },
    { id: 4, name: 'Neha Mishra', mobile: '7878787878', address: 'Rourkela' },
    { id: 5, name: 'Manas Ranjan', mobile: '7676767676', address: 'Balasore' }
  ];

  getCustomers(): Customer[] {
    return [...this.customers];
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  updateCustomer(updatedCustomer: Customer) {
    const index = this.customers.findIndex(c => c.id === updatedCustomer.id);
    if (index !== -1) {
      this.customers[index] = { ...updatedCustomer };
    }
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter(c => c.id !== id);
  }
}
