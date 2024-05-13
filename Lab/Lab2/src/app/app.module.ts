import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lab2Component } from './pages/lab2/lab2.component';
import { Lab3Component } from './pages/lab3/lab3.component';
import { HeaderComponent } from './header/header.component';
import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    Lab2Component,
    Lab3Component,
    HeaderComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent,ProductlistComponent]
})
export class AppModule { }
