import { Component } from '@angular/core';
import { ProductService, Product } from '../../core/services/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  standalone: false,
  styleUrls: ['./products.css']
})
export class Products {
  products: Product[] = [];
  newProduct: Product = { id: 0, itemName: '', price: 0, stock: 0 };
  editingProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    this.productService.addProduct(this.newProduct);
    this.products = this.productService.getProducts();
    this.newProduct = { id: 0, itemName: '', price: 0, stock: 0 };
  }

  startEdit(product: Product) {
    this.editingProduct = { ...product };
  }

  saveChanges() {
    if (this.editingProduct) {
      this.productService.updateProduct(this.editingProduct);
      this.products = this.productService.getProducts();
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingProduct = null;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }
}
