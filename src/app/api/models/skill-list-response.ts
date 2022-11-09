/* tslint:disable */
/* eslint-disable */
import { SkillListResponseDataItem } from './skill-list-response-data-item';
export interface SkillListResponse {
  data?: Array<SkillListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
