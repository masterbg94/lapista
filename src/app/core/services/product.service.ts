import {Injectable} from '@angular/core';
import {AllProducts} from '../product.mock';
import {Observable, of} from 'rxjs';

@Injectable()
export class ProductService {
  public products = AllProducts;

  getAllProducts(): Observable<any> {
    return of (this.products);
  }
}
