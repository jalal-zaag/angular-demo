import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { UserComponent } from './components/user/user.component';
import { ADMIN_PAGE_PATH, CONTROL_FLOW_PATH, DATA_BINDING_PAGE_PATH, GET_API_PATH, PIPE_PATH, USER_PAGE_PATH } from './helpers/Slug';

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
  },
  {
    path: CONTROL_FLOW_PATH,
    component: ControlFlowComponent
  },
  {
    path: GET_API_PATH,
    component: GetApiComponent
  },
  {
    path: PIPE_PATH,
    component: PipeComponent
  },
];
