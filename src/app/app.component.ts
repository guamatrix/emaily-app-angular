import { Component, OnInit } from '@angular/core';
import { AuthServices } from './auth/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private authServices: AuthServices) {}

  ngOnInit() {
    this.authServices.getUser();
  }
}
