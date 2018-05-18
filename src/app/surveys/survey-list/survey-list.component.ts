import { Component, OnInit, Input } from '@angular/core';

import { Survey } from '../store/surveys.reducers';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.less']
})
export class SurveyListComponent implements OnInit {
  @Input() surveyList: Survey[];

  constructor() { }

  ngOnInit() {
    console.log(this.surveyList);
  }

}
