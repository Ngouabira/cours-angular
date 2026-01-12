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



  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`
    );
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }



  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, JSON.stringify(user));
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}`, JSON.stringify(user));
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
