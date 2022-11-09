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

import { SkillListResponse } from '../models/skill-list-response';
import { SkillRequest } from '../models/skill-request';
import { SkillResponse } from '../models/skill-response';

@Injectable({
  providedIn: 'root',
})
export class SkillService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSkills
   */
  static readonly GetSkillsPath = '/skills';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSkills()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkills$Response(params?: {

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
): Observable<StrictHttpResponse<SkillListResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.GetSkillsPath, 'get');
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
        return r as StrictHttpResponse<SkillListResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSkills$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkills(params?: {

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
): Observable<SkillListResponse> {

    return this.getSkills$Response(params).pipe(
      map((r: StrictHttpResponse<SkillListResponse>) => r.body as SkillListResponse)
    );
  }

  /**
   * Path part for operation postSkills
   */
  static readonly PostSkillsPath = '/skills';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSkills()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSkills$Response(params: {
    context?: HttpContext
    body: SkillRequest
  }
): Observable<StrictHttpResponse<SkillResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.PostSkillsPath, 'post');
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
        return r as StrictHttpResponse<SkillResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSkills$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSkills(params: {
    context?: HttpContext
    body: SkillRequest
  }
): Observable<SkillResponse> {

    return this.postSkills$Response(params).pipe(
      map((r: StrictHttpResponse<SkillResponse>) => r.body as SkillResponse)
    );
  }

  /**
   * Path part for operation getSkillsId
   */
  static readonly GetSkillsIdPath = '/skills/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSkillsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillsId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SkillResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.GetSkillsIdPath, 'get');
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
        return r as StrictHttpResponse<SkillResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSkillsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillsId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<SkillResponse> {

    return this.getSkillsId$Response(params).pipe(
      map((r: StrictHttpResponse<SkillResponse>) => r.body as SkillResponse)
    );
  }

  /**
   * Path part for operation putSkillsId
   */
  static readonly PutSkillsIdPath = '/skills/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putSkillsId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putSkillsId$Response(params: {
    id: number;
    context?: HttpContext
    body: SkillRequest
  }
): Observable<StrictHttpResponse<SkillResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.PutSkillsIdPath, 'put');
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
        return r as StrictHttpResponse<SkillResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putSkillsId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putSkillsId(params: {
    id: number;
    context?: HttpContext
    body: SkillRequest
  }
): Observable<SkillResponse> {

    return this.putSkillsId$Response(params).pipe(
      map((r: StrictHttpResponse<SkillResponse>) => r.body as SkillResponse)
    );
  }

  /**
   * Path part for operation deleteSkillsId
   */
  static readonly DeleteSkillsIdPath = '/skills/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSkillsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSkillsId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.DeleteSkillsIdPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteSkillsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSkillsId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.deleteSkillsId$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
