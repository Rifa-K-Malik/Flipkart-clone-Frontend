import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubHeaderComponent } from './components/home/sub-header/sub-header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/home/nav/nav.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { BottomComponent } from './components/home/bottom/bottom.component';
import { Section1Component } from './components/home/section1/section1.component';
import { Section2Component } from './components/home/section2/section2.component';
import { Section3Component } from './components/home/section3/section3.component';
import { Section4Component } from './components/home/section4/section4.component';
import { Ad1Component } from './components/home/ad1/ad1.component';
import { Ad2Component } from './components/home/ad2/ad2.component';
import { Section5Component } from './components/home/section5/section5.component';
import { Section6Component } from './components/home/section6/section6.component';
import { Section7Component } from './components/home/section7/section7.component';
import { Section8Component } from './components/home/section8/section8.component';
import { Section9Component } from './components/home/section9/section9.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HeadercheckoutComponent } from './components/checkout/headercheckout/headercheckout.component';
import { FootercheckoutComponent } from './components/checkout/footercheckout/footercheckout.component';
import { CartheaderComponent } from './components/cart/cartheader/cartheader.component';
import { CartfooterComponent } from './components/cart/cartfooter/cartfooter.component';
import { AddtocartComponent } from './components/addtocart/addtocart.component';
import { ProductsComponent } from './components/products/products.component';
import { Pro1hComponent } from './components/products/pro1h/pro1h.component';
import { Pro2cComponent } from './components/products/pro2c/pro2c.component';
import { Pro3Component } from './components/products/pro3/pro3.component';
import { Pro4Component } from './components/products/pro4/pro4.component';
import { EgComponent } from './components/eg/eg.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SubHeaderComponent,
    NavComponent,
    FooterComponent,
    BottomComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Ad1Component,
    Ad2Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,
    Section9Component,
    CartComponent,
    CheckoutComponent,
    HeadercheckoutComponent,
    FootercheckoutComponent,
    CartheaderComponent,
    CartfooterComponent,
    AddtocartComponent,
    ProductsComponent,
    Pro1hComponent,
    Pro2cComponent,
    Pro3Component,
    Pro4Component,
    EgComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      progressBar:true,
      progressAnimation: 'decreasing',
      timeOut:5000,
      disableTimeOut:false
    }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
