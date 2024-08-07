import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { TokenStoreService } from '../token-store.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private userSubject : BehaviorSubject<any>;
  public user : Observable<any>;

  constructor (private _api: ApiService, private _token: TokenStoreService ) {
    this.userSubject = new BehaviorSubject<any>(this._token.getUser());
    this.user = this.userSubject.asObservable();
  }

  ListPost(requestBody: any): Observable<any> {
    return this._api.getTypeRequest2('home/search', requestBody);
  }
  
}
