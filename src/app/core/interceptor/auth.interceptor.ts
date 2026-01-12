import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../service/token.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  if (tokenService.isLoggedIn()) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      }
    });
  }
  return next(req);
};
