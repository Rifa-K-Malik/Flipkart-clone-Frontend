import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  hide: Boolean = false
  constructor(
    private fb: FormBuilder,
    private auth : AuthService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.loadform()
  }

  loadform() {
    this.signupForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
    console.log(this.signupForm)
  }
  submit(form) {
    if(this.signupForm.valid){
      this.auth.signup(form).subscribe((result)=>{
        if(result){
          this.router.navigate(['/'])
        }
      }, error => console.log(error))      
    }
  }
}
