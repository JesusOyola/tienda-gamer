import { Component, OnDestroy, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/product.interface';
import { CartService } from '../../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  cartProductsList: Products[] = [];
  urlImage: string =
    'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_';

  private subscription$!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.obtenerProductosDelCarrito();
  }

  obtenerProductosDelCarrito() {
    this.subscription$ = this.cartService.products.subscribe({
      next: (data) => {
        console.log(data)
        this.cartProductsList = data;
      },
    });
  }

  eliminarProductoDelCarrito(indice: number) {
    this.cartService.deleteProduct(indice);
    
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
