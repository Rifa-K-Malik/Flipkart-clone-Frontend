import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private fb: FormBuilder , private dialogref : MatDialogRef<LoginComponent> , private auth : AuthService) { }

  ngOnInit(): void {

    this.loadform()
  }

  loadform() {
    this.loginForm = this.fb.group({
      email : [null,[Validators.required,Validators.email]],
      password : [null,Validators.required]
    })
  }
  submit(form){
    if(this.loginForm.valid){
      this.auth.signin(form).subscribe((result)=>{
        if(result){
          this.dialogref.close()
        }
      })
    }
  }
}
