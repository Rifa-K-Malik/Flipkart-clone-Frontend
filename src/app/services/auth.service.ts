import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseUrl, SigninUrl, SignupUrl } from "../modals/api.model";
import { map, mapTo, tap } from 'rxjs/operators'
import { NotificationService } from "./notification.service";
import { BasePortalOutlet } from "@angular/cdk/portal";
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient, private notifier: NotificationService) { }
    signup(form): Observable<any> {
        return this.http.post<any>(`${BaseUrl + SignupUrl}`, form).pipe(
            map((result) => {
                console.log(result.message)
                if (result.message == "User created successfully") {
                    this.notifier.showSuccess('SignUp Successfull Now You Can Login')

                }
            }),
            mapTo(true)
        )
    }

    signin(form): Observable<any> {
        return this.http.post<any>(`${BaseUrl + SigninUrl}`, form).pipe(
            map((result) => {
                var user = result
                console.log(user)
                if (user.message == "Login SuccessFull") {
                    var res = JSON.stringify(user.user)
                    localStorage.setItem('token',user.user.token)
                    localStorage.setItem('user',res)
                    this.notifier.showSuccess('Login SuccessFull')
                }
            }),
            mapTo(true)
        )
    }

    token(): any {
        return localStorage.getItem('token') ? localStorage.getItem('token') : false
    }
    getuser():any {
        return localStorage.getItem('user') ? localStorage.getItem('user') : false
    }
    isloggedin(): Boolean {
      return  localStorage.getItem('user') ? true : false
    }
}