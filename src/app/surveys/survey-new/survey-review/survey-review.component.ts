import { Component, OnInit, Input } from '@angular/core';

import { SurveysService } from '../../surveys.service';
import { Survey } from '../../store/surveys.reducers';
import { FIELDS } from '../survey-form/survey-form.component';

@Component({
  selector: 'app-survey-review',
  templateUrl: './survey-review.component.html',
  styleUrls: ['./survey-review.component.less']
})
export class SurveyReviewComponent {
  @Input() survey: Survey;
  fields = FIELDS;

  constructor(private surveysService: SurveysService) { }

  onCancel() {
    this.surveysService.toggleReview();
  }

  onSend() {
  }
}
