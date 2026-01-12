import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public helper = new JwtHelperService();

  constructor() {
  }

  logOut(): void {
    window.localStorage.clear();
  }

  saveToken(token: string, refreshToken: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(REFRESH_TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }

  getToken(): string {
    return window.localStorage.getItem(TOKEN_KEY) ?? '';
  }

  isLoggedIn(): boolean {
    return !!window.localStorage.getItem(TOKEN_KEY) &&  !this.isExpired();
  }


  decodeToken() {

    const data = this.helper.decodeToken(this.getToken());
    const user = data != null ? {
      username: data.sub,
      authorities: data.authorities
    }: {};

    return user;
  }

  getAuthorities() {
    return this.decodeToken().authorities
  }

  isExpired (){
    return this.helper.isTokenExpired(this.getToken());
  }


}
