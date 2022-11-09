/* tslint:disable */
/* eslint-disable */
import { SkillCategoryListResponseDataItem } from './skill-category-list-response-data-item';
export interface SkillCategoryListResponse {
  data?: Array<SkillCategoryListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
