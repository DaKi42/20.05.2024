import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form-component',
  standalone: true,
  imports: [],
  templateUrl: './login-form-component.component.html',
  styleUrl: './login-form-component.component.css'
})
export class LoginFormComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
