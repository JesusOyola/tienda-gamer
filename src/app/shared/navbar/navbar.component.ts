import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  cartItems: number = 0;
  private subscription$!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getAmountCartItems();
  }

  getAmountCartItems() {
   
    this.subscription$ = this.cartService.products.subscribe({
      next: (data) => {
        this.cartItems = data.length;
       
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
