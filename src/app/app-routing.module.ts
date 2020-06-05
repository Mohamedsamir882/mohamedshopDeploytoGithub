import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'orders', component: MyOrdersComponent},
  {path: 'admin/product', component: AdminProductComponent},
  {path: 'Admin/orders', component: AdminOrdersComponent},
  {path: 'shopping-card', component: ShoppingCardComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
