import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { WelcomeComponent } from '../welcome/welcome.component';
import { LoaderComponent } from './loader/loader.component';

const COMPONENTS = [
  HomeComponent,
  HeaderComponent,
  WelcomeComponent,
];

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  SharedModule,
  CoreRoutingModule
];

@NgModule({
  declarations: [COMPONENTS, LoaderComponent],
  imports: [MODULES],
  exports: [HomeComponent],
  providers: [],
})
export class CoreModule {}
