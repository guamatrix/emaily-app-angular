import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../../app.reducers';
import { User } from '../../shared/store/ui.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLogin$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isLoading$ = this.store.pipe(select(fromRoot.getIsLoading));
    this.isLogin$ = this.store.pipe(select(fromRoot.getIsAuth));
    this.user$ = this.store.pipe(select(fromRoot.getUser));
  }
}
