import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../service/token.service';
import { inject } from '@angular/core';

export const unAuthGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if (!tokenService.isLoggedIn()) {
    return true;
  }
  router.navigate(['/home']);
  return false;
};
