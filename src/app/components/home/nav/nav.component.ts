import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/modals/user.modal';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  display = "hide"
  display1 = "hide1"
  user: User = new User()
  constructor(public dialog: MatDialog, public auth: AuthService) { }

  openDialog() {
    this.dialog.open(LoginComponent);
  }

  ngOnInit(): void {
    if(this.auth.isloggedin()){
      this.user = JSON.parse(this.auth.getuser())
      console.log(this.user)
    }

  }

}
