import { Routes } from '@angular/router';
import { LearningComponent } from './learning/learning.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './core/guard/auth.guard';
import { unAuthGuard } from './core/guard/unauth.guard';
import { NotFoundComponent } from './nont-found/not-found.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent, canActivate: [unAuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'learning', component: LearningComponent },
  {
    path: 'users',
    loadChildren: () => import('./user/user.routes').then(m => m.routes),
    canActivate: [authGuard]
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];
