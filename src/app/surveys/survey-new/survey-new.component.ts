import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromSurvey from '../store/surveys.reducers';
import * as SurveysActions from '../store/surveys.actions';
import { SurveysService } from '../surveys.service';

@Component({
  selector: 'app-survey-new',
  templateUrl: './survey-new.component.html',
  styleUrls: ['./survey-new.component.less'],
  providers: [SurveysService]
})
export class SurveyNewComponent implements OnInit, OnDestroy {
  showReview: boolean;
  surveyForm: Observable<fromSurvey.SurveyForm>;
  subscription: Subscription;

  constructor(private store: Store<fromSurvey.State>,
    private surveysService: SurveysService) { }

  ngOnInit() {
    this.store.dispatch(new SurveysActions.InitSurvey());
    this.surveyForm = this.store.pipe(select(fromSurvey.getSurveyForm));

    this.subscription = this.surveysService.showReview.subscribe((flag: boolean) => {
      this.showReview = flag;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
