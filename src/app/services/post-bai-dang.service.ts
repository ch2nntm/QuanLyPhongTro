import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Baidang } from '../model/baidang';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostBaiDangService {
  private REST_API_SERVER='http://localhost:3000';
  private httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getListPosts(): Observable<Baidang[]> {
    return this.http.get<Baidang[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public getProducts(): Observable<any>{
    const url=`${this.REST_API_SERVER}/products`;
    return this.http.get<any>(url, this.httpOptions);
  }
}
