/* tslint:disable */
/* eslint-disable */
import { ProjectListResponseDataItem } from './project-list-response-data-item';
export interface ProjectListResponse {
  data?: Array<ProjectListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
