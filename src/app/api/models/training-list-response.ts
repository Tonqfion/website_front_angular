/* tslint:disable */
/* eslint-disable */
import { TrainingListResponseDataItem } from './training-list-response-data-item';
export interface TrainingListResponse {
  data?: Array<TrainingListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
