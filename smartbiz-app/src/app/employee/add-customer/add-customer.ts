import { Component } from '@angular/core';
import { CustomerService , Customer } from '../../core/services/customer';

@Component({
  selector: 'app-add-customer',
  standalone: false,
  templateUrl: './add-customer.html',
  styleUrls: ['./add-customer.css']
})
export class AddCustomer {
   newCustomer: Customer = {
    id: 0,
    name: '',
    mobile: '',
    address: ''
  };

  constructor(private customerService: CustomerService) {}

  addCustomer() {
    if (this.newCustomer.name && this.newCustomer.mobile && this.newCustomer.address) {
      this.customerService.addCustomer(this.newCustomer);
      alert('Customer added successfully');
      this.newCustomer = { id: 0, name: '', mobile: '', address: '' };
    } else {
      alert('Please fill all fields');
    }
  }
}
