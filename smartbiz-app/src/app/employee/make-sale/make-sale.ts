import { Component } from '@angular/core';
import { CustomerService, Customer } from '../../core/services/customer';
import { ProductService , Product} from '../../core/services/product';
import { TransactionService, Transaction } from '../../core/services/transaction';


@Component({
  selector: 'app-make-sale',
  templateUrl: './make-sale.html',
  standalone: false,
  styleUrls: ['./make-sale.css']
})
export class MakeSale {
  customers: Customer[] = [];
  products: Product[] = [];

  selectedCustomerId: number = 0;
  selectedProductId: number = 0;
  quantity: number = 1;
  totalPrice: number = 0;

  constructor(
    private customerService: CustomerService,
    private productService: ProductService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.products = this.productService.getProducts();
  }

  updateTotal() {
    const product = this.products.find(p => p.id === this.selectedProductId);
    if (product) {
      this.totalPrice = product.price * this.quantity;
    } else {
      this.totalPrice = 0;
    }
  }

  recordSale() {

  console.log('Form submitted!');
  if (this.selectedCustomerId && this.selectedProductId && this.quantity > 0) {
    const product = this.products.find(p => p.id === this.selectedProductId);

    if (!product) return;

    const transaction: Transaction = {
      id: 0,
      customerId: this.selectedCustomerId,
      productId: product.id,
      quantity: this.quantity,
      date: new Date(),
      total: 0
    };

    this.transactionService.addTransaction(transaction);
    alert('Sale recorded successfully ✅');

    // Reset form
    this.selectedCustomerId = 0;
    this.selectedProductId = 0;
    this.quantity = 1;
    this.totalPrice = 0;
  } else {
    alert('Please fill all fields');
  }


}


}
