
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../services/notification.service';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {
    constructor(private notifier : NotificationService){}
    getClientErrorMessage(error: Error): string {

        console.log('in client')
        return error.message ?
            error.message :
            error.toString();
    }

    getServerErrorMessage(error: HttpErrorResponse): string {
        console.log('in Server')
        console.log(error)
      
        if (navigator.onLine) {
            if (error.error) {
                if(error.error.error.message){
                    if(error.error.error.message == "jwt expired"){
                        return 'You Session Has Expired You Need To Login First'
                    } else {
                        return  error.error.error.message.toString() 
                       
                    }
                   
                } else {
                    return "SomeThing Went Wrong"
                }
              
            } else {
                if (error.status == 0) {
                    return 'Server Error '
                } else {
                    return error.error.toString()
                }
            }
        } else {
            this.notifier.showError('No Internet Connection')
        }
      

    }

    getServerStack(error: HttpErrorResponse): string {
        // handle stack trace
        return 'stack';
    }
    getClientStack(error: Error): string {
        return error.stack;
    }
}