import { Action } from '@ngrx/store';

import { SurveyForm, Survey } from './surveys.reducers';

export const INIT_SURVEY_FORM = '[SV] init survey form';
export const SAVE_SURVEY_FORM = '[SV] save survey form';
export const FETCH_SURVEYS = '[SV] fetch surveys';

export class InitSurvey implements Action {
  readonly type = INIT_SURVEY_FORM;
}

export class SaveSurvey implements Action {
  readonly type = SAVE_SURVEY_FORM;
  constructor(public payload: SurveyForm) {}
}

export class FetchSurveys implements Action {
  readonly type = FETCH_SURVEYS;
  constructor(public payload: Survey[]) {}
}

export type FetchActions = InitSurvey | SaveSurvey | FetchSurveys;
