import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listProducts: Products[] = [];

  urlImage: string =
  'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.listProducts = data;
      },
    });
  }
}
