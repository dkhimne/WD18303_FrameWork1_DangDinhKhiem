import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {ProductComponent} from './pages/product/product.component';
import { UnitComponent } from './pages/unit/unit.component';
import { CreateComponent } from './pages/unit/create/create.component';
import { EditComponent } from './pages/unit/edit/edit.component';
import { AuthGuard } from './@core/guards/auth.guards';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {path:'', redirectTo:'login', pathMatch:'full'}, // login hay '' cung ve trang Login

  {
    path:'product',
    canActivate:[AuthGuard],
    component:ProductComponent
  },
  {
    path:'unit',
    canActivate:[AuthGuard],
    component:UnitComponent
  },
  {
    path:'add',
    canActivate:[AuthGuard],
    component:CreateComponent
  },
  {
    path:'edit/:id',
    canActivate:[AuthGuard],
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
