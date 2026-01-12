import { Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { UserComponent } from './user.component';

export const routes: Routes = [

  { path: '', component: DataGridComponent },
  { path: 'create', component: CreateFormComponent },
  { path: 'edit/:id', component: EditFormComponent },


];
