/* tslint:disable */
/* eslint-disable */
import { CompanyListResponseDataItem } from './company-list-response-data-item';
export interface CompanyListResponse {
  data?: Array<CompanyListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
