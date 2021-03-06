import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  Says:any = "FROM FLIPKART"
  constructor(
    public snackBar: MatSnackBar,
    private toastr: ToastrService,
    private zone: NgZone) { }

  showSuccess(message: string): void {
    // Had an issue with the snackbar being ran outside of angular's zone.
    this.zone.run(() => {
      this.toastr.success(message, this.Says)
      // this.snackBar.open(message, 'Close', {duration: 5000 });
    });
  }

  showError(message: string): void {
    this.zone.run(() => {
      // The second parameter is the text in the button. 
      // In the third, we send in the css class for the snack bar.
      this.toastr.error(message, this.Says)
      // this.snackBar.open(message, 'Close', {panelClass: ['error'],duration: 5000});
    });
  }
  showInfo(message: string): void {
    this.zone.run(() => {
      // The second parameter is the text in the button. 
      // In the third, we send in the css class for the snack bar.
      this.toastr.info(message, this.Says)
      // this.snackBar.open(message, 'Close', {panelClass: ['error'],duration: 5000});
    });
  }
  showWarning(message: string): void {
    this.zone.run(() => {
      // The second parameter is the text in the button. 
      // In the third, we send in the css class for the snack bar.
      this.toastr.warning(message, this.Says)
      // this.snackBar.open(message, 'Close', {panelClass: ['error'],duration: 5000});
    });
  }
}