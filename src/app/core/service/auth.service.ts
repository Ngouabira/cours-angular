import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../request/login.request';
import { RegisterRequest } from '../request/register.request';
import { AuthResponse } from '../response/auth.response';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, JSON.stringify(request), { headers: { 'Content-Type': 'application/json' } });
  }

  register(request: RegisterRequest): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/register`, JSON.stringify(request), { headers: { 'Content-Type': 'application/json' } });
  }
}
