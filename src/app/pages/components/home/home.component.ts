import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categorias, Products } from 'src/app/interface/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  listProducts: Products[] = [];
  listCategories: Categorias[] = [];
  private subcription$!: Subscription;

  urlImage: string =
    'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_';

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerCategorias();
  }

  obtenerProductos() {
    this.subcription$ = this.productsService.getProducts().subscribe({
      next: (data) => {
        this.listProducts = data;
      },
    });
  }

  obtenerCategorias() {
    this.subcription$ = this.productsService.getCategorias().subscribe({
      next: (data) => {
        this.listCategories = data;
      },
    });
  }

  agregarAlCarrito(product: Products) {
    this.cartService.addNewProduct(product);
  }

  ngOnDestroy(): void {
    this.subcription$.unsubscribe();
  }
}
