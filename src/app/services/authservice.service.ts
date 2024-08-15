import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { TokenStoreService } from './token-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;
  
  constructor(private _api: ApiService, private _token: TokenStoreService) {
    this.userSubject = new BehaviorSubject<any>(this._token.getUser());
    this.user = this.userSubject.asObservable();
  }

  getUser() {
    console.log(this.userSubject);
    console.log(this.userSubject.value);
    return this.userSubject.value;
  }

  login(credentials: any): Observable<any> {
    return this._api.postTypeRequest('login', {
      email: credentials.email,
      password: credentials.password
    }).pipe(
      map((response: any) => {
        if (response && response.token && response.user) {
          const actor = response.user;
          if (actor.roles === 'user' || actor.roles === 'admin') {
            this._token.setToken(response.token);
            this._token.setUser(actor);
            this.userSubject.next(actor);
            return actor;
          } else {
            throw new Error('Vai trò người dùng không hợp lệ');
          }
        } else {
          throw new Error('Thông tin đăng nhập không hợp lệ');
        }
      })
    );
  }

  register(user: any): Observable<any> {
    return this._api.postTypeRequest('register', {
      fullName: user.fullName,
      email: user.email,
      password: user.password,
    });
  }

  logout() {
    this._token.clearStorage();
    this.userSubject.next(null);
  }
}
