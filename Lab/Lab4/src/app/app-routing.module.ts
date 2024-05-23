import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductComponent} from '../app/pages/product/product.component';
import {ProductdetailComponent} from '../app/pages/product/productdetail/productdetail.component';
import {HomeComponent} from '../app/pages/home/home.component';


const routes: Routes = [
  {
    path: 'product',
    component:ProductComponent,
    // children:[
    //   {
    //     path: 'product-detail/:id',
    //     component:ProductdetailComponent
    //   }
    // ]
  },
  {
    path: 'product-detail/:id',
    component:ProductdetailComponent
  },
  {
    path: 'home',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
