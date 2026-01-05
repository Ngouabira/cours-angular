import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../core/service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { LoginRequest } from '../core/request/login.request';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  errors = {
    email: {
      required: 'Email est requis',
      email: 'Email doit être une adresse email valide',
    },
    password: {
      required: 'Mot de passe est requis',
      minlength: 'Mot de passe doit contenir au moins 8 caractères',
    },
  };

  loginError: string = '';

  loginResponse: LoginRequest = {
    username: '',
    password: '',
  };

  onSubmit() {
    this.loginResponse.username = this.loginForm.value.email;
    this.loginResponse.password = this.loginForm.value.password;
    this.authService.login(this.loginResponse).subscribe({
      next: (response) => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login error:', error);
        this.loginError = "Email ou mot de passe incorrect";
      }
    });

  }
}
