import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { ApiService } from '../api.service';
import { TokenStoreService } from '../token-store.service';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  private userSubject : BehaviorSubject<any>;
  public user : Observable<any>;
  private baseUrl: string = 'http://localhost:5000/api/';

  constructor (private _api: ApiService, private _token: TokenStoreService ) {
    this.userSubject = new BehaviorSubject<any>(this._token.getUser());
    this.user = this.userSubject.asObservable();
  }

  ListPost(requestBody: any): Observable<any> {
    return this._api.postTypeRequest('home', requestBody);
  }
  
  SearchPost(params: any): Observable<any> {
    return this._api.postTypeRequest('home', params).pipe(
      map(response => response || throwError('Không tìm thấy kết quả phù hợp')),
      catchError(error => {
        console.error('Error in SearchPost:', error);
        return throwError(error);
      })
    );
  }

  Call_API_Search_Post(params: any): Observable<any>{
    return this._api.postTypeRequest('home?'+params,params).pipe(
      map(response => response || throwError('Không tìm thấy kết quả phù hợp')),
      catchError(error => {
        console.error('Error in SearchPost:', error);
        return throwError(error);
      })
    );
  }

  Register_User(requestBody: any): Observable<any> {
    return this._api.postTypeRequest('register', requestBody);
  }

  DetailPost(param: any){
    return this._api.getTypeRequest(`home/${param}`);
  }

}

//Call_API_