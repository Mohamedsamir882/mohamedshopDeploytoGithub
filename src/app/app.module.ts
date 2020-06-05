import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }from './app-routing.module';
import { AppComponent }from './app.component';
import { NavBarComponent }from './nav-bar/nav-bar.component';
import { ProductComponent }from './product/product.component';
import { MyOrdersComponent }from './my-orders/my-orders.component';
import {AdminProductComponent}from  './admin/admin-product/admin-product.component';
import {AdminOrdersComponent}from './admin/admin-orders/admin-orders.component';
import { NgbModule }from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCardComponent }from './shopping-card/shopping-card.component';
import { LoginComponent }from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    AdminProductComponent,
    ShoppingCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
