import { Routes } from '@angular/router';
import { LearningComponent } from './learning/learning.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'learning', component: LearningComponent },
  { path: '**', redirectTo: 'login' },
];
