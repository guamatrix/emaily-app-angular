import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatCardModule,
  MatBadgeModule} from '@angular/material';

const MODULES = [
  CommonModule,
  FormsModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatCardModule,
  MatBadgeModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class SharedModule {}
