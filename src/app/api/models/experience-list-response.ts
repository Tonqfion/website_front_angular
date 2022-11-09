/* tslint:disable */
/* eslint-disable */
import { ExperienceListResponseDataItem } from './experience-list-response-data-item';
export interface ExperienceListResponse {
  data?: Array<ExperienceListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
