/* tslint:disable */
/* eslint-disable */
import { UserSkillListResponseDataItem } from './user-skill-list-response-data-item';
export interface UserSkillListResponse {
  data?: Array<UserSkillListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
