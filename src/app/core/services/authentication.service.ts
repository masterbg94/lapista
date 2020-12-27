import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {api_endpoint} from '../../api.config';

@Injectable()
export class AuthenticationService {
  constructor(private _http: HttpClient) {
  }

  // public login(credentials: any): Observable<any> {
  //   return this._http.get(`${API_BASE}/users/check-username`, {params: credentials});
  // }

  isUserLogged() {
    const user = localStorage.getItem('auth');
    console.log(!(user === null));
    return !(user === null);
  }
}
