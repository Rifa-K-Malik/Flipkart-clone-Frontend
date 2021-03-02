import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {
  Deals: any [];
  constructor() { }
  

  ngOnInit(): void {
    this.Pro()
  }
  Pro(){
    this.Deals=[
      {
        img:'assets/img/11.jpeg',
        name:'Badminton & Footballs',
        price:`From &#x20B9;199`,
        text:'Shop Now!'
      },
      {
        img:'assets/img/12.jpeg',
        name:'Headphones',
        price:'Upto 50% off',
        text:'JBL Sony & more'
      },
      {
        img:'assets/img/13.jpeg',
        name:'Home Hygiene Essentials',
        price:'From &#x20B9;99',
        text:'Veggie Clean & more'
      },
      {
        img:'assets/img/14.jpeg',
        name:'Kettles, Mixers & more',
        price:'Up to 70% Off',
        text:'Best Deals!'
      },
      {
        img:'assets/img/15.jpeg',
        name:'Makeup Bestsellers',
        price:'From &#x20B9;99+5% Extra Off',
        text:'Lakme, Maybelline'
      },
      {
        img:'assets/img/16.jpeg',
        name:'Sparx, Asian & more',
        price:'From &#x20B9;199+Extra5% Off',
        text:'Shoes, Sandals & more'
      },
      {
        img:'assets/img/17.jpeg',
        name:'Puma, Myra & more',
        price:'30-60%+Extra 5% Off',
        text:'Flats, Shoes & more'
      },
      {
        img:'assets/img/18.jpeg',
        name:"Levi's, USP",
        price:'40-70% Off',
        text:'Jackets, T-Shirts & more'
      },
    ]
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin:10,
    center: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 5,
      },
      786: {
        items: 7,
      },
    },
    nav: false,
  };
}
