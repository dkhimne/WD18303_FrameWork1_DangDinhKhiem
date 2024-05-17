import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './pages/product/product.component';
import {StarComponent} from './pages/star/star.component';

const routes: Routes = [
  {
    path: 'star',
    component:StarComponent,
  },
  {
    path: 'product',
    component:ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
