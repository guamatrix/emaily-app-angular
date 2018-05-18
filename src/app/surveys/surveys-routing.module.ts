import { Routes, RouterModule } from '@angular/router';
import { SurveysComponent } from './surveys.component';
import { NgModule } from '@angular/core';
import { SurveyNewComponent } from './survey-new/survey-new.component';

const routes: Routes = [
  { path: '', component: SurveysComponent, pathMatch: 'full' },
  { path: 'new', component: SurveyNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SurveysRoutingModule {}
