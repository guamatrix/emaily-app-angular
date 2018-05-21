import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { User } from '../shared/store/ui.reducers';
import { SetUser, SetLoader } from '../shared/store/ui.actions';
import { State } from '../app.reducers';

@Injectable()
export class PayemntService {
  constructor(private httpClient: HttpClient,
  private store: Store<State>) {}

  processPayment(token: any, amount) {
    this.store.dispatch(new SetLoader(true));
    this.httpClient.post('/api/stripe', token).pipe(take(1)).subscribe(
      (user: User) => { // API return updated user whit credits
        this.store.dispatch(new SetLoader(false));
        this.store.dispatch(new SetUser(user));
      }
    );
  }
}
