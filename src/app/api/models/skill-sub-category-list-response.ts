/* tslint:disable */
/* eslint-disable */
import { SkillSubCategoryListResponseDataItem } from './skill-sub-category-list-response-data-item';
export interface SkillSubCategoryListResponse {
  data?: Array<SkillSubCategoryListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
