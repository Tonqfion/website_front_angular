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

import { SchoolListResponse } from '../models/school-list-response';
import { SchoolRequest } from '../models/school-request';
import { SchoolResponse } from '../models/school-response';

@Injectable({
  providedIn: 'root',
})
export class SchoolService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSchools
   */
  static readonly GetSchoolsPath = '/schools';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSchools()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSchools$Response(params?: {

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
): Observable<StrictHttpResponse<SchoolListResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.GetSchoolsPath, 'get');
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
        return r as StrictHttpResponse<SchoolListResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSchools$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSchools(params?: {

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
): Observable<SchoolListResponse> {

    return this.getSchools$Response(params).pipe(
      map((r: StrictHttpResponse<SchoolListResponse>) => r.body as SchoolListResponse)
    );
  }

  /**
   * Path part for operation postSchools
   */
  static readonly PostSchoolsPath = '/schools';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSchools()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSchools$Response(params: {
    context?: HttpContext
    body: SchoolRequest
  }
): Observable<StrictHttpResponse<SchoolResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.PostSchoolsPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SchoolResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSchools$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSchools(params: {
    context?: HttpContext
    body: SchoolRequest
  }
): Observable<SchoolResponse> {

    return this.postSchools$Response(params).pipe(
      map((r: StrictHttpResponse<SchoolResponse>) => r.body as SchoolResponse)
    );
  }

  /**
   * Path part for operation getSchoolsId
   */
  static readonly GetSchoolsIdPath = '/schools/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSchoolsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSchoolsId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SchoolResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.GetSchoolsIdPath, 'get');
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
        return r as StrictHttpResponse<SchoolResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSchoolsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSchoolsId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<SchoolResponse> {

    return this.getSchoolsId$Response(params).pipe(
      map((r: StrictHttpResponse<SchoolResponse>) => r.body as SchoolResponse)
    );
  }

  /**
   * Path part for operation putSchoolsId
   */
  static readonly PutSchoolsIdPath = '/schools/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putSchoolsId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putSchoolsId$Response(params: {
    id: number;
    context?: HttpContext
    body: SchoolRequest
  }
): Observable<StrictHttpResponse<SchoolResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.PutSchoolsIdPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SchoolResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putSchoolsId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putSchoolsId(params: {
    id: number;
    context?: HttpContext
    body: SchoolRequest
  }
): Observable<SchoolResponse> {

    return this.putSchoolsId$Response(params).pipe(
      map((r: StrictHttpResponse<SchoolResponse>) => r.body as SchoolResponse)
    );
  }

  /**
   * Path part for operation deleteSchoolsId
   */
  static readonly DeleteSchoolsIdPath = '/schools/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSchoolsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSchoolsId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, SchoolService.DeleteSchoolsIdPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteSchoolsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSchoolsId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.deleteSchoolsId$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
