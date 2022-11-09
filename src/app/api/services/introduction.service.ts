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

import { IntroductionListResponse } from '../models/introduction-list-response';
import { IntroductionRequest } from '../models/introduction-request';
import { IntroductionResponse } from '../models/introduction-response';

@Injectable({
  providedIn: 'root',
})
export class IntroductionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getIntroductions
   */
  static readonly GetIntroductionsPath = '/introductions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIntroductions()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntroductions$Response(params?: {

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
): Observable<StrictHttpResponse<IntroductionListResponse>> {

    const rb = new RequestBuilder(this.rootUrl, IntroductionService.GetIntroductionsPath, 'get');
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
        return r as StrictHttpResponse<IntroductionListResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getIntroductions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntroductions(params?: {

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
): Observable<IntroductionListResponse> {

    return this.getIntroductions$Response(params).pipe(
      map((r: StrictHttpResponse<IntroductionListResponse>) => r.body as IntroductionListResponse)
    );
  }

  /**
   * Path part for operation postIntroductions
   */
  static readonly PostIntroductionsPath = '/introductions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postIntroductions()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postIntroductions$Response(params: {
    context?: HttpContext
    body: IntroductionRequest
  }
): Observable<StrictHttpResponse<IntroductionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, IntroductionService.PostIntroductionsPath, 'post');
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
        return r as StrictHttpResponse<IntroductionResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postIntroductions$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postIntroductions(params: {
    context?: HttpContext
    body: IntroductionRequest
  }
): Observable<IntroductionResponse> {

    return this.postIntroductions$Response(params).pipe(
      map((r: StrictHttpResponse<IntroductionResponse>) => r.body as IntroductionResponse)
    );
  }

  /**
   * Path part for operation getIntroductionsId
   */
  static readonly GetIntroductionsIdPath = '/introductions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIntroductionsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntroductionsId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<IntroductionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, IntroductionService.GetIntroductionsIdPath, 'get');
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
        return r as StrictHttpResponse<IntroductionResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getIntroductionsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIntroductionsId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<IntroductionResponse> {

    return this.getIntroductionsId$Response(params).pipe(
      map((r: StrictHttpResponse<IntroductionResponse>) => r.body as IntroductionResponse)
    );
  }

  /**
   * Path part for operation putIntroductionsId
   */
  static readonly PutIntroductionsIdPath = '/introductions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putIntroductionsId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putIntroductionsId$Response(params: {
    id: number;
    context?: HttpContext
    body: IntroductionRequest
  }
): Observable<StrictHttpResponse<IntroductionResponse>> {

    const rb = new RequestBuilder(this.rootUrl, IntroductionService.PutIntroductionsIdPath, 'put');
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
        return r as StrictHttpResponse<IntroductionResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putIntroductionsId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putIntroductionsId(params: {
    id: number;
    context?: HttpContext
    body: IntroductionRequest
  }
): Observable<IntroductionResponse> {

    return this.putIntroductionsId$Response(params).pipe(
      map((r: StrictHttpResponse<IntroductionResponse>) => r.body as IntroductionResponse)
    );
  }

  /**
   * Path part for operation deleteIntroductionsId
   */
  static readonly DeleteIntroductionsIdPath = '/introductions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteIntroductionsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteIntroductionsId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, IntroductionService.DeleteIntroductionsIdPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteIntroductionsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteIntroductionsId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.deleteIntroductionsId$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
