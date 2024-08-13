import {Component, OnInit} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { RegisterService } from '../../services/register/register.service';
import { PostsService } from '../../services/post/posts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit{
  isLoggedIn: boolean=false;
  isEmail: boolean=false;
  isPassword: boolean=false;
  isPhone: boolean=false;
  isAddress: boolean=false;
  isName: boolean=false;
  email: string='';
  password: string='';
  phone: string='';
  address='';
  name: string='';

  isEmailLogin=false;
  isPasswordLogin=false;
  emaillogin='';
  passwordlogin='';

  registerForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private _login: LoginService, private _api_post: PostsService, private _router: Router){}

  OnFocusEmail(){
    this.isEmail = true;
  }
  OnFocusEmailLogin(){
    this.isEmailLogin = true;
  }
  OnFocusPassword(){
    this.isPassword = true;
  }
  OnFocusPasswordLogin(){
    this.isPasswordLogin = true;
  }
  OnFocusPhone(){
    this.isPhone = true;
  }
  OnFocusAddress(){
    this.isAddress = true;
  }
  OnFocusName(){
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
  emailLoginFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordLoginFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  hide = true; // Hide password

  ToggleHide() {
    this.hide = !this.hide;
  }

  ngOnInit(): void {}
  user = {
    name: '',
    email: '',
    phone: '',
    address_user: '',
    password: ''
  };

  OnSubmit(): void {
    if (this.emaillogin === '' || this.passwordlogin === '') {
      alert('Vui lòng điền đầy đủ các trường');
    } else {
      this._login.login({ email: this.emaillogin, password: this.passwordlogin })
        .subscribe(
          (actor) => {
            if (actor.roles === 'user') {
              alert('Bạn đang đăng nhập với tư cách là người dùng');
              this._router.navigate(['/uiuser'], { queryParams: { name: actor.name } }); // Điều hướng tới trang User
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
  
  
  OnRegister(): void {
    console.log('Form values:', this.user);  // Kiểm tra giá trị của form
    
    if (this.user) {
      this._api_post.Register_User(this.user).subscribe(
        (response: any) => {
          console.log('Register successful', response);
        },
        (error: any) => {
          console.error('Register error', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
  
  
}
