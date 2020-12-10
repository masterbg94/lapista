import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api_endpoint} from '../../api.config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getAllCategories() {
    return this.http.get(api_endpoint + 'category');
  }

  getAllCategoriesWithDetails() {
    return this.http.get(api_endpoint + 'category/details');
  }

  getAllItems() {
    return this.http.get(api_endpoint + 'item');
  }
}
