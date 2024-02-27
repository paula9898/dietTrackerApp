import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmedPassword: ['', [Validators.required]],
    });
  }

  OnFormSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.signupService.register(this.registerForm.value).subscribe((data) => {
      console.log('User Registered successfully!!');
    });
  }
}
