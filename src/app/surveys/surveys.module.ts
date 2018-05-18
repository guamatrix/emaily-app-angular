import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SurveysRoutingModule } from './surveys-routing.module';
import { SurveysComponent } from './surveys.component';
import { SurveyNewComponent } from './survey-new/survey-new.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyItemComponent } from './survey-item/survey-item.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyReviewComponent } from './survey-review/survey-review.component';

const COMPONENTS = [
  SurveysComponent
];

@NgModule({
  declarations: [COMPONENTS, SurveyNewComponent, SurveyListComponent, SurveyItemComponent, SurveyFormComponent, SurveyReviewComponent],
  imports: [SharedModule, SurveysRoutingModule],
  exports: []
})
export class SurveysModule {}
