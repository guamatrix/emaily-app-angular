import { Component, OnInit, Input, HostListener } from '@angular/core';

import { User } from '../../shared/store/ui.reducers';
import { AuthServices } from '../../auth/auth.services';
import * as fromRoot from '../../app.reducers';
import { PayemntService } from '../../payments/payment.service';
import { Hosted } from 'protractor/built/driverProviders';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() isLogin;
  @Input() user: User;
  handler: any;
  amount = 500;

  constructor(private authService: AuthServices, private paymentService: PayemntService) {}

  ngOnInit() {
    console.log(this.isLogin, this.user);
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      locale: 'auto',
      token: token => {
        this.paymentService.processPayment(token, this.amount);
      }
    });
  }

  login() {
    this.authService.sendAuthGoogle();
  }

  logout() {
    this.authService.logout();
  }

  handlePayment() {
    this.handler.open({
      name: 'Adding Credits',
      description: 'Add credits to your account',
      amount: this.amount
    });
  }

  @HostListener('window:popstate')
    onPopstate() {
      this.handler.close();
    }
}
