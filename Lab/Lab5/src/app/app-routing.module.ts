import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {ProductComponent} from './pages/product/product.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {path:'', redirectTo:'login', pathMatch:'full'}, // login hay '' cung ve trang Login

  {
    path:'product',
    component:ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
