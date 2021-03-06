import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseUrl, SignupUrl } from "../modals/api.model";
import { mapTo, tap } from 'rxjs/operators'
import { NotificationService } from "./notification.service";
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient,private notifier : NotificationService) { }
    signup(form) : Observable<any> {
        return this.http.post<any>(`${BaseUrl + SignupUrl}`,form).pipe(
            tap((result)=>{
                if(result.message == "User created successfully"){
                    this.notifier.showSuccess('SignUp Successfull Now You Can Login')
                   
                }
            }),
            mapTo(true)
        )
    }
}