import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  itemName: string;
  price: number;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, itemName: 'Rice Bag 25kg', price: 1200, stock: 10 },
    { id: 2, itemName: 'Cooking Oil 1L', price: 160, stock: 30 },
    { id: 3, itemName: 'Toothpaste', price: 55, stock: 50 },
    { id: 4, itemName: 'Washing Powder', price: 85, stock: 20 },
    { id: 5, itemName: 'Notebook (200pg)', price: 35, stock: 100 },
    { id: 6, itemName: 'Ball Pen', price: 10, stock: 500 },
    { id: 7, itemName: 'Detergent Bar', price: 20, stock: 40 },
    { id: 8, itemName: 'Milk Packet 500ml', price: 28, stock: 60 }
  ];

  getProducts(): Product[] {
    return [...this.products]; // returns a copy
  }

  addProduct(product: Product): void {
    const newId = this.products.length + 1;
    this.products.push({ ...product, id: newId });
  }

  updateProduct(updated: Product): void {
    const index = this.products.findIndex(p => p.id === updated.id);
    if (index !== -1) {
      this.products[index] = { ...updated };
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
