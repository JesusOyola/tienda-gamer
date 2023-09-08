import { ProductImages } from './product-images.interface';

export interface Products {
  destacado: number;
  nombre: string;
  id_producto: number;
  id_subcategoria: number;
  precio: number;
  imagenes: [ProductImages];
  vendible: number;
  stock: number;
  garantia: number;
  iva: number;
}

export interface Categorias {
  id: number;
  nombre: string;
  id_agrupador: number;
  imagen: string;
  orden: number;
}
