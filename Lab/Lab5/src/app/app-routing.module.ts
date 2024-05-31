import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {ProductComponent} from './pages/product/product.component';
import { UnitComponent } from './pages/unit/unit.component';
import { CreateComponent } from './pages/unit/create/create.component';
import { EditComponent } from './pages/unit/edit/edit.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {path:'', redirectTo:'login', pathMatch:'full'}, // login hay '' cung ve trang Login

  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'unit',
    component:UnitComponent
  },
  {
    path:'add',
    component:CreateComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
