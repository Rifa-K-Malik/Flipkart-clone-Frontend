import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  display ="hide"
  display1 ="hide1"

  constructor( public dialog: MatDialog ) { }

  openDialog() {
    this.dialog.open(LoginComponent);
  }

  ngOnInit(): void {
  }

}
