/* tslint:disable */
/* eslint-disable */
import { UploadFileListResponseDataItem } from './upload-file-list-response-data-item';
export interface UploadFileListResponse {
  data?: Array<UploadFileListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
