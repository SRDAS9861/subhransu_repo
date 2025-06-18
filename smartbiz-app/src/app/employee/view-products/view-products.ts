import { Component } from '@angular/core';
import { ProductService, Product } from '../../core/services/product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.html',
  standalone: false,
  styleUrls: ['./view-products.css']
})
export class ViewProducts {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
