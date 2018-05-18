import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as Actions from './surveys.actions';
import * as fromRoot from '../../app.reducers';

export interface SurveyForm {
  title: string;
  subject: string;
  body: string;
  recipient: string;
}

export interface Recipient {
  email: string;
  responded: boolean;
}

export interface Survey {
  title: string;
  subject: string;
  body: string;
  recipients: Recipient[];
  yes: number;
  no: number;
  dateSent: string;
}

export interface StateSurvey {
  surveyForm: SurveyForm;
  surveyList: Survey[];
}

export interface State extends fromRoot.State {
  surveys: StateSurvey;
}

const initialState: StateSurvey = {
  surveyForm: null,
  surveyList: [
    {
      yes: 0,
      no: 0,
      title: 'czxczxczxc',
      subject: 'czxczxczx',
      body: 'prueba local',
      recipients: [
        {
          responded: false,
          email: 'jmarva03@gmail.com'
        }
      ],
      dateSent: '2018-05-17T00:54:03.235Z'
      },
  ]
};

export function surveysReducer(
  state = initialState,
  action: Actions.FetchActions
) {
  switch (action.type) {
    case Actions.INIT_SURVEY_FORM:
      return { ...state, surveyForm: null };

    case Actions.SAVE_SURVEY_FORM:
      return { ...state, surveyForm: action.payload };

    case Actions.FETCH_SURVEYS:
      return { ...state, surveyList: action.payload };

    default:
      return state;
  }
}

export const getSurveysState = createFeatureSelector<StateSurvey>('surveys');
export const getSurveyList = createSelector(
  getSurveysState,
  (state: StateSurvey) => state.surveyList
);
export const getSurveyForm = createSelector(
  getSurveysState,
  (state: StateSurvey) => state.surveyForm
);
