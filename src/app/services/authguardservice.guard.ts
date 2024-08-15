

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStoreService } from './token-store.service';

@Injectable({
  providedIn: 'root',
})
//triển khai interface CanActivate để xác định liệu một route có thể được kích hoạt hay không.
export class authguardserviceGuard implements CanActivate {
  constructor(private _route: Router, private _token: TokenStoreService) {}
  //Kiểm tra user đã đăng nhập hay chưa
  
  //để kiểm tra xem người dùng có quyền truy cập vào route hay không.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const currentUser = this._token.getUser();//Nếu đăng nhập thì dùng getUser của TokenStorageService tìm = trues
    if (currentUser) {
      return true;
    }
    this._route.navigate(['/uiuser']);// đăng nhập thất bại, điều hướng sang trang login
    return false;
  }
}
