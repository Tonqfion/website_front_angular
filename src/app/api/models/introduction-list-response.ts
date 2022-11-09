/* tslint:disable */
/* eslint-disable */
import { IntroductionListResponseDataItem } from './introduction-list-response-data-item';
export interface IntroductionListResponse {
  data?: Array<IntroductionListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
