import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Lab2Component} from './pages/lab2/lab2.component';
import {Lab3Component} from './pages/lab3/lab3.component';


const routes: Routes = [
  {
    path: 'lab2',
    component:Lab2Component,
  },
  {
    path: 'lab3',
    component:Lab3Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
