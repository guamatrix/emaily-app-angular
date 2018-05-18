import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SurveysComponent } from '../surveys/surveys.component';
import { LoaderComponent } from './loader/loader.component';

const COMPONENTS = [
  HomeComponent,
  HeaderComponent,
  WelcomeComponent,
  SurveysComponent
];

const MODULES = [
  BrowserModule,
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
