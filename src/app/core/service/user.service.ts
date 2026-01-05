import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../request/login.request';
import { RegisterRequest } from '../request/register.request';
import { AuthResponse } from '../response/auth.response';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  private headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`,
      { headers: this.headers });
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`,
      { headers: this.headers });
  }



  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, JSON.stringify(user), { headers: this.headers });
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}`, JSON.stringify(user), { headers: this.headers });
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`,
      { headers: this.headers });
  }
}
