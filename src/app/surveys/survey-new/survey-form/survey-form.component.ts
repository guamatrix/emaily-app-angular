import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromSurveys from '../../store/surveys.reducers';
import * as SurveyActions from '../../store/surveys.actions';
import { SurveysService } from '../../surveys.service';

export const FIELDS = [
  { name: 'title', placeholder: 'Survey Title' },
  { name: 'subject', placeholder: 'Subject Line' },
  { name: 'body', placeholder: 'Email Body' },
  { name: 'recipient', placeholder: 'Recipent List' }
];

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.less']
})
export class SurveyFormComponent implements OnInit {
  surveyForm: FormGroup;
  @Input() formData: fromSurveys.SurveyForm;

  FIELDS = FIELDS;

  constructor(private store: Store<fromSurveys.StateSurvey>,
    private surveysService: SurveysService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    const title = this.formData ? this.formData.title : null;
    const subject = this.formData ? this.formData.subject : null;
    const body = this.formData ? this.formData.body : null;
    const recipient = this.formData ? this.formData.recipient : null;

    this.surveyForm = new FormGroup({
      'title': new FormControl(title, { validators: Validators.required }),
      'subject': new FormControl(subject, { validators: Validators.required }),
      'body': new FormControl(body, { validators: Validators.required }),
      'recipient': new FormControl(recipient, { validators: [Validators.required]})
    });
  }

  onSubmit() {
    if (!this.surveyForm.invalid) {
      console.log(this.surveyForm.value);
      this.store.dispatch(new SurveyActions.SaveSurvey(this.surveyForm.value));
      this.surveysService.toggleReview();
    }
  }
}
