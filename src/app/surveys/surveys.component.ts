import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromSurvey from './store/surveys.reducers';
import * as SurveysActions from './store/surveys.actions';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.less']
})
export class SurveysComponent implements OnInit {
  surveys$: Observable<fromSurvey.Survey[]>;

  constructor(private router: Router,
    private routerActive: ActivatedRoute,
    private store: Store<fromSurvey.State>) { }

  ngOnInit() {
    this.surveys$ = this.store.pipe(select(fromSurvey.getSurveyList));
  }

  newSurvey() {
    // this.store.dispatch(new SurveysActions.InitSurvey());
    this.router.navigate(['new'], { relativeTo: this.routerActive });
  }
}
