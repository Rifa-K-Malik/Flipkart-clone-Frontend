import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {
images : any = [
  "assets/img/s1.png",
  "assets/img/s2.png",
  "assets/img/s3.png",
  "assets/img/s4.png",
]
  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin:5,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      786: {
        items: 1,
      },
    },
    nav: false,
  };
}
