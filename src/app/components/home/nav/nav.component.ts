import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  display ="hide"
  display1 ="hide1"

  constructor() { }

  ngOnInit(): void {
  }

}
