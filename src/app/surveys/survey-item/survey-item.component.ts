import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../store/surveys.reducers';

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.less']
})
export class SurveyItemComponent implements OnInit {
  @Input() survey: Survey;
  constructor() { }

  ngOnInit() {
  }

}
