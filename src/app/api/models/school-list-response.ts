/* tslint:disable */
/* eslint-disable */
import { SchoolListResponseDataItem } from './school-list-response-data-item';
export interface SchoolListResponse {
  data?: Array<SchoolListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
