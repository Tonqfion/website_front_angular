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

import { SkillSubCategoryListResponse } from '../models/skill-sub-category-list-response';
import { SkillSubCategoryRequest } from '../models/skill-sub-category-request';
import { SkillSubCategoryResponse } from '../models/skill-sub-category-response';

@Injectable({
  providedIn: 'root',
})
export class SkillSubCategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSkillSubCategories
   */
  static readonly GetSkillSubCategoriesPath = '/skill-sub-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSkillSubCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillSubCategories$Response(params?: {

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
): Observable<StrictHttpResponse<SkillSubCategoryListResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SkillSubCategoryService.GetSkillSubCategoriesPath, 'get');
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
        return r as StrictHttpResponse<SkillSubCategoryListResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSkillSubCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillSubCategories(params?: {

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
): Observable<SkillSubCategoryListResponse> {

    return this.getSkillSubCategories$Response(params).pipe(
      map((r: StrictHttpResponse<SkillSubCategoryListResponse>) => r.body as SkillSubCategoryListResponse)
    );
  }

  /**
   * Path part for operation postSkillSubCategories
   */
  static readonly PostSkillSubCategoriesPath = '/skill-sub-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSkillSubCategories()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSkillSubCategories$Response(params: {
    context?: HttpContext
    body: SkillSubCategoryRequest
  }
): Observable<StrictHttpResponse<SkillSubCategoryResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SkillSubCategoryService.PostSkillSubCategoriesPath, 'post');
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
        return r as StrictHttpResponse<SkillSubCategoryResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSkillSubCategories$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postSkillSubCategories(params: {
    context?: HttpContext
    body: SkillSubCategoryRequest
  }
): Observable<SkillSubCategoryResponse> {

    return this.postSkillSubCategories$Response(params).pipe(
      map((r: StrictHttpResponse<SkillSubCategoryResponse>) => r.body as SkillSubCategoryResponse)
    );
  }

  /**
   * Path part for operation getSkillSubCategoriesId
   */
  static readonly GetSkillSubCategoriesIdPath = '/skill-sub-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSkillSubCategoriesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillSubCategoriesId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SkillSubCategoryResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SkillSubCategoryService.GetSkillSubCategoriesIdPath, 'get');
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
        return r as StrictHttpResponse<SkillSubCategoryResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSkillSubCategoriesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSkillSubCategoriesId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<SkillSubCategoryResponse> {

    return this.getSkillSubCategoriesId$Response(params).pipe(
      map((r: StrictHttpResponse<SkillSubCategoryResponse>) => r.body as SkillSubCategoryResponse)
    );
  }

  /**
   * Path part for operation putSkillSubCategoriesId
   */
  static readonly PutSkillSubCategoriesIdPath = '/skill-sub-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putSkillSubCategoriesId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putSkillSubCategoriesId$Response(params: {
    id: number;
    context?: HttpContext
    body: SkillSubCategoryRequest
  }
): Observable<StrictHttpResponse<SkillSubCategoryResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SkillSubCategoryService.PutSkillSubCategoriesIdPath, 'put');
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
        return r as StrictHttpResponse<SkillSubCategoryResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putSkillSubCategoriesId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putSkillSubCategoriesId(params: {
    id: number;
    context?: HttpContext
    body: SkillSubCategoryRequest
  }
): Observable<SkillSubCategoryResponse> {

    return this.putSkillSubCategoriesId$Response(params).pipe(
      map((r: StrictHttpResponse<SkillSubCategoryResponse>) => r.body as SkillSubCategoryResponse)
    );
  }

  /**
   * Path part for operation deleteSkillSubCategoriesId
   */
  static readonly DeleteSkillSubCategoriesIdPath = '/skill-sub-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSkillSubCategoriesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSkillSubCategoriesId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, SkillSubCategoryService.DeleteSkillSubCategoriesIdPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteSkillSubCategoriesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSkillSubCategoriesId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.deleteSkillSubCategoriesId$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
