import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { UserComponent } from './components/user/user.component';
import { ADMIN_PAGE_PATH, DATA_BINDING_PAGE_PATH, USER_PAGE_PATH } from './helpers/Slug';

export const routes: Routes = [
  {
    path: USER_PAGE_PATH,
    component: UserComponent
  },
  {
    path: ADMIN_PAGE_PATH,
    component: AdminComponent
  },
  {
    path: DATA_BINDING_PAGE_PATH,
    component: DataBindingComponent
  }
];
