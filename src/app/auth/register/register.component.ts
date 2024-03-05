import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private signupService: SignupService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  get fval() {
    return this.registerForm.controls;
  }

  OnFormSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    var user = <User>{};
    user.userName = this.registerForm.controls['userName'].value;
    user.email = this.registerForm.controls['email'].value;
    user.password = this.registerForm.controls['password'].value;

    this.signupService.register(user).subscribe({
      next: (result) => {
        console.log(result);
        alert('User Registered successfully!!');
      },
      error: (error) => {
        console.log('cos nie pyklo');
        console.log(error);
      },
    });
  }

  onSave(): void {
    if (this.registerForm.value) {
      alert('invalid');
      return;
    }
    console.log('valid');
  }
}
