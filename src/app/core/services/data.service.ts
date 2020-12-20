import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api_endpoint} from '../../api.config';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public emitNewColorImage: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  getAllCategories() {
    return this.http.get(api_endpoint + 'category');
  }

  getAllCategoriesWithDetails() {
    return this.http.get(api_endpoint + 'category/details');
  }

  // ITEMS
  getAllItems() {
    return this.http.get(api_endpoint + 'item');
  }

  getItemById(id) {
    return this.http.get(api_endpoint + `item/${id}`);
  }
  // COLORS

  // SIZES

  /*
  * Working decrement size , also with multi params
  */
  decrementSize(id) {
    return this.http.get(api_endpoint + `size/decrement/${id}`);
  }

  sendMail(data) {
    return this.http.post(api_endpoint + 'sendmail' , data);
  }
}
