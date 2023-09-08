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

  get products(){
    return this.products$.asObservable();
  }


  addNewProduct(product: Products) {
    this.cartProducts.push(product);
    this.products$.next(this.cartProducts);
  }

  deleteProduct(index:number){
    this.cartProducts.splice(index,1);
    this.products$.next(this.cartProducts);
  }
}
