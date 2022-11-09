/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UploadFileListResponse } from '../models/upload-file-list-response';
import { UploadFileResponse } from '../models/upload-file-response';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUploadFiles
   */
  static readonly GetUploadFilesPath = '/upload/files';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUploadFiles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUploadFiles$Response(params?: {

    /**
     * Sort by attributes ascending (asc) or descending (desc)
     */
    sort?: string;

    /**
     * Retun page/pageSize (default: true)
     */
    'pagination[withCount]'?: boolean;

    /**
     * Page number (default: 0)
     */
    'pagination[page]'?: number;

    /**
     * Page size (default: 25)
     */
    'pagination[pageSize]'?: number;

    /**
     * Offset value (default: 0)
     */
    'pagination[start]'?: number;

    /**
     * Number of entities to return (default: 25)
     */
    'pagination[limit]'?: number;

    /**
     * Fields to return (ex: title,author)
     */
    fields?: string;

    /**
     * Relations to return
     */
    populate?: string;

    /**
     * Filters to apply
     */
    filters?: {
};
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UploadFileListResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UploadFileService.GetUploadFilesPath, 'get');
    if (params) {
      rb.query('sort', params.sort, {});
      rb.query('pagination[withCount]', params['pagination[withCount]'], {});
      rb.query('pagination[page]', params['pagination[page]'], {});
      rb.query('pagination[pageSize]', params['pagination[pageSize]'], {});
      rb.query('pagination[start]', params['pagination[start]'], {});
      rb.query('pagination[limit]', params['pagination[limit]'], {});
      rb.query('fields', params.fields, {});
      rb.query('populate', params.populate, {});
      rb.query('filters', params.filters, {"style":"deepObject"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UploadFileListResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUploadFiles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUploadFiles(params?: {

    /**
     * Sort by attributes ascending (asc) or descending (desc)
     */
    sort?: string;

    /**
     * Retun page/pageSize (default: true)
     */
    'pagination[withCount]'?: boolean;

    /**
     * Page number (default: 0)
     */
    'pagination[page]'?: number;

    /**
     * Page size (default: 25)
     */
    'pagination[pageSize]'?: number;

    /**
     * Offset value (default: 0)
     */
    'pagination[start]'?: number;

    /**
     * Number of entities to return (default: 25)
     */
    'pagination[limit]'?: number;

    /**
     * Fields to return (ex: title,author)
     */
    fields?: string;

    /**
     * Relations to return
     */
    populate?: string;

    /**
     * Filters to apply
     */
    filters?: {
};
    context?: HttpContext
  }
): Observable<UploadFileListResponse> {

    return this.getUploadFiles$Response(params).pipe(
      map((r: StrictHttpResponse<UploadFileListResponse>) => r.body as UploadFileListResponse)
    );
  }

  /**
   * Path part for operation getUploadFilesId
   */
  static readonly GetUploadFilesIdPath = '/upload/files/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUploadFilesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUploadFilesId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UploadFileResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UploadFileService.GetUploadFilesIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UploadFileResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUploadFilesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUploadFilesId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<UploadFileResponse> {

    return this.getUploadFilesId$Response(params).pipe(
      map((r: StrictHttpResponse<UploadFileResponse>) => r.body as UploadFileResponse)
    );
  }

  /**
   * Path part for operation deleteUploadFilesId
   */
  static readonly DeleteUploadFilesIdPath = '/upload/files/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUploadFilesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUploadFilesId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UploadFileService.DeleteUploadFilesIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteUploadFilesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUploadFilesId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.deleteUploadFilesId$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
