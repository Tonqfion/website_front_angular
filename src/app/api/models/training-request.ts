/* tslint:disable */
/* eslint-disable */
export interface TrainingRequest {
  data: {
'trainingName': string;
'trainingLevel': 'Undergraduate' | 'Post-Graduate' | 'Master\'s Degree' | 'Doctorate';
'trainingDescription'?: string;
'school'?: (number | string);
'owner'?: (number | string);
'startDate': string;
'endDate'?: string;
};
}
