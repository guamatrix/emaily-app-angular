import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    StoreModule.forRoot(reducers)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
