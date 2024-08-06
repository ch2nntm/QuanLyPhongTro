import {Component} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
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

  constructor(private router: Router){}

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

  ngOnInit(): void {
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

  buttonLogin(){
    if(this.emaillogin == 'admin@gmail.com' && this.passwordlogin == '111111'){
      this.router.navigate(['/uiadmin']);
      this.isLoggedIn=true;
    }
    else if(this.emaillogin == 'user@gmail.com' && this.passwordlogin == '111111'){
      this.router.navigate(['/uiuser']);
      this.isLoggedIn=true;
    }
    else {
      alert('Thông tin đăng nhập không chính xác');
    }
  }
}
