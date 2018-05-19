import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { SurveysRoutingModule } from './surveys-routing.module';
import { SurveysComponent } from './surveys.component';
import { SurveyNewComponent } from './survey-new/survey-new.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyItemComponent } from './survey-item/survey-item.component';
import { surveysReducer } from './store/surveys.reducers';
import { SurveyFormComponent } from './survey-new/survey-form/survey-form.component';
import { SurveyReviewComponent } from './survey-new/survey-review/survey-review.component';

const COMPONENTS = [
  SurveysComponent,
  SurveyNewComponent,
  SurveyListComponent,
  SurveyItemComponent,
  SurveyFormComponent,
  SurveyReviewComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    SharedModule,
    SurveysRoutingModule,
    StoreModule.forFeature('surveys', surveysReducer)
  ],
  exports: []
})
export class SurveysModule {}
