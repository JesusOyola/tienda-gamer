import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Categorias, Products } from '../interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrlProductos: string = environment.urlProductos;
  private apiUrlCategorias:string = environment.urlCategorias;

  constructor(private http: HttpClient) {}


  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrlProductos);
  }

  getCategorias():Observable<Categorias[]>{
    return this.http.get<Categorias[]>(this.apiUrlCategorias);
  }
}
