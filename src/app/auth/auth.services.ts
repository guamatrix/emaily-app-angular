import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { User } from '../shared/store/ui.reducers';
import * as fromRoot from '../app.reducers';
import * as Actions from '../shared/store/ui.actions';

const BASE_URL = 'http://localhost:5000';

@Injectable()
export class AuthServices {
 constructor(private httpClient$: HttpClient,
  private store: Store<fromRoot.State>) {}

 sendAuthGoogle() {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Origin': '*'
  });
  this.store.dispatch(new Actions.SetLoader(true));
  this.httpClient$.get( `/auth/google`, { headers: headers }).pipe(take(1)).subscribe(
    (resp: any) => {
      this.store.dispatch(new Actions.SetLoader(false));
      console.log(resp);
      this.store.dispatch(new Actions.Login(resp.data));
    }
   );
 }

 logout() {
   this.store.dispatch(new Actions.SetLoader(true));
  this.httpClient$.get( `/api/logout`).pipe(take(1)).subscribe(
    (resp) => {
      console.log(resp);
      this.store.dispatch(new Actions.Logout);
      this.store.dispatch(new Actions.SetLoader(false));
    }
  );
 }

 getUser() {
   this.store.dispatch(new Actions.SetLoader(true));
   this.httpClient$.get(`/api/current_user`).pipe(take(1)).subscribe(
     (resp: User) => {
       this.store.dispatch(new Actions.SetLoader(false));
       console.log(resp);
       this.store.dispatch(new Actions.SetUser(resp));
     }
   );
 }

}
