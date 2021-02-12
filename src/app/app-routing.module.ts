import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtocartComponent } from './components/addtocart/addtocart.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { EgComponent } from './components/eg/eg.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'addtocart',
    component: AddtocartComponent
  },
  {
    path: 'product',
    component: ProductsComponent
  },
  {
    path: 'eg',
    component: EgComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
