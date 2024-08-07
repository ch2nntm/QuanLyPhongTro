import {Component, OnInit} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent{
  isLoggedIn=false;

  isEmail=false;
  isPassword=false;
  isPhone=false;
  isAddress=false;
  isName=false;
  email='';
  password='';
  phone='';
  address='';
  name='';

  isEmailLogin=false;
  isPasswordLogin=false;
  emaillogin='';
  passwordlogin='';

  constructor(private _login: LoginService, private _register: RegisterService, private _router: Router){}

  onFocusEmail(){
    this.isEmail = true;
  }
  onFocusEmailLogin(){
    this.isEmailLogin = true;
  }
  onFocusPassword(){
    this.isPassword = true;
  }
  onFocusPasswordLogin(){
    this.isPasswordLogin = true;
  }
  onFocusPhone(){
    this.isPhone = true;
  }
  onFocusAddress(){
    this.isAddress = true;
  }
  onFocusName(){
    this.isName = true;
  }

  ngAfterViewInit (): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton?.addEventListener('click', () => {
      container?.classList.add('right-panel-active');
    });

    signInButton?.addEventListener('click', () => {
      container?.classList.remove('right-panel-active');
    });
  }
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  phoneFormControl = new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]);
  addressFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(10)]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  emailloginFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordloginFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  hide = true; // Chế độ ẩn mật khẩu mặc định

  toggleHide() {
    this.hide = !this.hide;
  }

  onSubmit(): void {
    if (this.emaillogin === '' || this.passwordlogin === '') {
      alert('Vui lòng điền đầy đủ các trường');
    } else {
      this._login.login({ email: this.emaillogin, password: this.passwordlogin })
        .subscribe(
          (actor) => {
            if (actor.roles === 'user') {
              alert('Bạn đang đăng nhập với tư cách là người dùng');
              this._router.navigate(['/uiuser'], { queryParams: { name: actor.phone } }); // Điều hướng tới trang User
              this.isLoggedIn=true;
            } else if (actor.roles === 'admin') {
              alert('Bạn đang đăng nhập với tư cách là người quản trị');
              this._router.navigate(['/uiadmin']); // Điều hướng tới trang Admin
              this.isLoggedIn=true;
            } else {
              alert('Vai trò người dùng không hợp lệ');
            }
          },
          (error) => {
            console.error('Lỗi đăng nhập:', error);
            alert('Đăng nhập thất bại. Vui lòng kiểm tra thông tin và thử lại.');
          }
        );
    }
  }
  
  onRegister(): void {
    if (this.name === '' || this.email === '' || this.phone === '' || this.address === '' || this.password === '') {
      alert('Vui lòng điền đầy đủ các trường');
    } else {
      this._register.register({
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        password: this.password
      }).subscribe(
        (actor: { roles: string; }) => {
          if (actor.roles === 'user') {
            alert('Đăng ký thành công');
            this._router.navigate(['/uiuser']); // Điều hướng tới trang User
          } else if (actor.roles === 'admin') {
            alert('Đăng ký thành công');
            this._router.navigate(['/uiadmin']); // Điều hướng tới trang Admin
          } else {
            alert('Vai trò người dùng không hợp lệ');
          }
        },
        (error: any) => {
          console.error('Lỗi đăng ký:', error);
          alert('Đăng ký thất bại. Vui lòng kiểm tra thông tin và thử lại.');
        }
      );
    }
  }
  
  
}
