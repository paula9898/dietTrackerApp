import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { LoginResult } from '../models/loginResult';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginResult?: LoginResult;
  submitted = false;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get fval() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    var user = <User>{};
    user.userName = this.loginForm.controls['userName'].value;
    user.password = this.loginForm.controls['password'].value;

    this.authenticationService.login(user).subscribe({
      next: (result) => {
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result.userName));
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
