import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-new',
  templateUrl: './survey-new.component.html',
  styleUrls: ['./survey-new.component.less']
})
export class SurveyNewComponent implements OnInit {
  surveyForm: FormGroup;

  FIELDS = [
    { name: 'title', placeholder: 'Survey Title' },
    { name: 'subject', placeholder: 'Subject Line' },
    { name: 'body', placeholder: 'Email Body' },
    { name: 'recipient', placeholder: 'Recipent List' }
  ];

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.surveyForm = new FormGroup({
      'title': new FormControl(null, { validators: Validators.required }),
      'subject': new FormControl(null, { validators: Validators.required }),
      'body': new FormControl(null, { validators: Validators.required }),
      'recipient': new FormControl(null, { validators: [Validators.required]})
    });
  }

  onSubmit() {
    if (!this.surveyForm.invalid) {
      console.log(this.surveyForm.value);
    }
  }
}
