import { Component, NgZone } from '@angular/core';
import { ICustomWindow, WindowRefService } from 'src/app/window-ref.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  private _window: ICustomWindow;
  public rzp: any;

  public options: any = {
    key: '', // add razorpay key here
    name: 'Rifa K Malik',
    description: 'Shopping',
    amount: 100, // razorpay takes amount in paisa
    prefill: {
      name: 'Rifa K Malik',
      email: 'malikrif07@gmail.com', // add your email id
    },
    notes: {},
    theme: {
      color: '#3880FF'
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          // add current page routing if payment fails
        })
      })
    }
  };



  constructor(
    private zone: NgZone,
    private winRef: WindowRefService
  ) {
    this._window = this.winRef.nativeWindow;
  }

  initPay(): void {
    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
  }

  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
    });
  }

}
  

