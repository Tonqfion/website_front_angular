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

import { SkillCategoryListResponse } from '../models/skill-category-list-response';
import { SkillCategoryRequest } from '../models/skill-category-request';
import { SkillCategoryResponse } from '../models/skill-category-response';

@Injectable({
  providedIn: 'root',
})
export class SkillCategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSkillCategories
   */
  static readonly GetSkillCategoriesPath = '/skill-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSkillCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillCategories$Response(params?: {

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
): Observable<StrictHttpResponse<SkillCategoryListResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SkillCategoryService.GetSkillCategoriesPath, 'get');
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
        return r as StrictHttpResponse<SkillCategoryListResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSkillCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillCategories(params?: {

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
): Observable<SkillCategoryListResponse> {

    return this.getSkillCategories$Response(params).pipe(
      map((r: StrictHttpResponse<SkillCategoryListResponse>) => r.body as SkillCategoryListResponse)
    );
  }

  /**
   * Path part for operation postSkillCategories
   */
  static readonly PostSkillCategoriesPath = '/skill-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSkillCategories()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSkillCategories$Response(params: {
    context?: HttpContext
    body: SkillCategoryRequest
  }
): Observable<StrictHttpResponse<SkillCategoryResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SkillCategoryService.PostSkillCategoriesPath, 'post');
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
        return r as StrictHttpResponse<SkillCategoryResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSkillCategories$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSkillCategories(params: {
    context?: HttpContext
    body: SkillCategoryRequest
  }
): Observable<SkillCategoryResponse> {

    return this.postSkillCategories$Response(params).pipe(
      map((r: StrictHttpResponse<SkillCategoryResponse>) => r.body as SkillCategoryResponse)
    );
  }

  /**
   * Path part for operation getSkillCategoriesId
   */
  static readonly GetSkillCategoriesIdPath = '/skill-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSkillCategoriesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillCategoriesId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SkillCategoryResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SkillCategoryService.GetSkillCategoriesIdPath, 'get');
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
        return r as StrictHttpResponse<SkillCategoryResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSkillCategoriesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillCategoriesId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<SkillCategoryResponse> {

    return this.getSkillCategoriesId$Response(params).pipe(
      map((r: StrictHttpResponse<SkillCategoryResponse>) => r.body as SkillCategoryResponse)
    );
  }

  /**
   * Path part for operation putSkillCategoriesId
   */
  static readonly PutSkillCategoriesIdPath = '/skill-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putSkillCategoriesId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putSkillCategoriesId$Response(params: {
    id: number;
    context?: HttpContext
    body: SkillCategoryRequest
  }
): Observable<StrictHttpResponse<SkillCategoryResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SkillCategoryService.PutSkillCategoriesIdPath, 'put');
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
        return r as StrictHttpResponse<SkillCategoryResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putSkillCategoriesId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putSkillCategoriesId(params: {
    id: number;
    context?: HttpContext
    body: SkillCategoryRequest
  }
): Observable<SkillCategoryResponse> {

    return this.putSkillCategoriesId$Response(params).pipe(
      map((r: StrictHttpResponse<SkillCategoryResponse>) => r.body as SkillCategoryResponse)
    );
  }

  /**
   * Path part for operation deleteSkillCategoriesId
   */
  static readonly DeleteSkillCategoriesIdPath = '/skill-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSkillCategoriesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSkillCategoriesId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, SkillCategoryService.DeleteSkillCategoriesIdPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteSkillCategoriesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSkillCategoriesId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.deleteSkillCategoriesId$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
