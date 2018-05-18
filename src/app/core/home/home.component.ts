import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../../app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isLoading$ = this.store.pipe(select(fromRoot.getIsLoading));
  }

}
