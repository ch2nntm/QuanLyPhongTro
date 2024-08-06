import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class RegisterComponent {
  isEmail=false;
  isPassword=false;
  email='';
  password='';
  onFocusEmail(){
    this.isEmail = true;
  }
  onFocusPassword(){
    this.isPassword = true;
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
  matcher = new MyErrorStateMatcher();
  
}
