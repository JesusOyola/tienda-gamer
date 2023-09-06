import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Products } from '../interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl: string = environment.url;

  constructor(private http: HttpClient) {}


  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrl);
  }
}
