import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { TokenStoreService } from '../token-store.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  private userSubject : BehaviorSubject<any>;
  public user : Observable<any>;

  constructor (private _api: ApiService, private _token: TokenStoreService ) {
    this.userSubject = new BehaviorSubject<any>(this._token.getUser());
    this.user = this.userSubject.asObservable();
  }

  login(credential: any): Observable<any> {
    return this._api.postTypeRequest('login', {
      email: credential.email,
      password: credential.password
    }).pipe(
      map((response: any) => {
        if (response && response.token && response.user) {
          const actor = response.user; // Lấy thông tin người dùng từ phản hồi
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
  
}