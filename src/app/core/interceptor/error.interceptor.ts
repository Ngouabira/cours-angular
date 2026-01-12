import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../service/token.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401 || error.status === 403) {
        tokenService.logOut();
        router.navigate(['/login']);
      }
      return throwError(() => new Error(error.error.message));
    })
  );
};
