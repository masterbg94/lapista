import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api_endpoint} from '../../api.config';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public emitNewColorImage: EventEmitter<string> = new EventEmitter();
  public emitAddNewFromModal: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  getAllCategories() {
    return this.http.get(api_endpoint + 'category');
  }

  getAllCategoriesWithDetails() {
    return this.http.get(api_endpoint + 'category/details');
  }

  getCategoryById(id) {
    return this.http.get(api_endpoint + `category/${id}`);
  }

  createCategory(data) {
    return this.http.post(api_endpoint + 'category', data);
  }

  deleteCategory(id) {
    return this.http.delete(api_endpoint + `category/${id}`);
  }

  updateCategory(id, data) {
    return this.http.put(api_endpoint + `category/${id}`, data);
  }

  createItem(data) {
    return this.http.post(api_endpoint + 'item', data);
  }

  getAllItems() {
    return this.http.get(api_endpoint + 'item');
  }

/* For item filter ,
 getFilteredItems(parametar) {
    return this.http.get<any>(api_endpoint + 'item').pipe(
      map(
        (x) => {
          return x.filter(item => item.category.name == parametar);
        }
      )
    );
  }
  */

  getItemById(id) {
    return this.http.get(api_endpoint + `item/${id}`);
  }

  deleteItem(id) {
    return this.http.delete(api_endpoint + `item/${id}`);
  }

  updateItem(id, data) {
    return this.http.put(api_endpoint + `item/${id}`, data);
  }


  getAllColors() {
    return this.http.get(api_endpoint + 'color');
  }

  getColorById(id) {
    return this.http.get(api_endpoint + `color/${id}`);
  }

  getAllSizes() {
    return this.http.get(api_endpoint + 'size');
  }

  getSizeById(id) {
    return this.http.get(api_endpoint + `size/${id}`);
  }

  /**
   * HEELS
   * */

  getAllHeels() {
    return this.http.get(api_endpoint + 'heel');
  }

  getHeelById(id) {
    return this.http.get(api_endpoint + `heel/${id}`);
  }

  decrementHeel(id) {
    return this.http.get(api_endpoint + `heel/decrement/${id}`);
  }

  /*
   * Working decrement size , also with multi params
   */
  decrementSize(id) {
    return this.http.get(api_endpoint + `size/decrement/${id}`);
  }

  sendMail(data) {
    return this.http.post(api_endpoint + 'sendmail', data);
  }

  sendOrder(data) {
    return this.http.post(api_endpoint + 'sendorder', data);
  }

  /** For modal , to get all data with one same service */

  getAllItemsForTable(serviceType) {
    return this.http.get(api_endpoint + `${serviceType}`);
  }

  createModalItem(data , serviceType) {
    return this.http.post(api_endpoint + `${serviceType}` , data);
  }

  updateModalItem(id, data, serviceType) {
    return this.http.put(api_endpoint + `${serviceType}/${id}`, data);
  }

  getModalDataById(id, serviceType) {
    return this.http.get(api_endpoint + `${serviceType}/${id}`);
  }

  deleteById(serviceType, id) {
    return this.http.delete(api_endpoint + `${serviceType}/${id}`);
  }

  decrementHeelSize(id) {
    return this.http.get(api_endpoint + `heel/decrement/${id}`);
  }

}
