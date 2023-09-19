import { Injectable } from '@angular/core';
import { Products } from '../interface/product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Products[] = [];

  private products$: BehaviorSubject<Products[]>;

  constructor() {
    this.products$ = new BehaviorSubject<Products[]>([]);
  }

  get products() {
    this.products$.next(this.getLocalStorageCart());

    return this.products$.asObservable();
  }

  getLocalStorageCart() {
    const getCartfromLocalStorage = localStorage.getItem('cart');

    if (getCartfromLocalStorage == null) {
      return [];
    } else {
      return JSON.parse(getCartfromLocalStorage);
    }
  }

  addNewProduct(product: Products) {
    this.cartProducts.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  deleteProduct(index: number) {
    const cartFromLocalStorage = this.getLocalStorageCart();
    cartFromLocalStorage.splice(index, 1);
    this.cartProducts = cartFromLocalStorage;
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.products$.next(this.cartProducts);
  }
}
