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

import { UserSkillListResponse } from '../models/user-skill-list-response';
import { UserSkillRequest } from '../models/user-skill-request';
import { UserSkillResponse } from '../models/user-skill-response';

@Injectable({
  providedIn: 'root',
})
export class UserSkillService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserSkills
   */
  static readonly GetUserSkillsPath = '/user-skills';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserSkills()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserSkills$Response(params?: {

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
): Observable<StrictHttpResponse<UserSkillListResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserSkillService.GetUserSkillsPath, 'get');
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
        return r as StrictHttpResponse<UserSkillListResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserSkills$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserSkills(params?: {

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
): Observable<UserSkillListResponse> {

    return this.getUserSkills$Response(params).pipe(
      map((r: StrictHttpResponse<UserSkillListResponse>) => r.body as UserSkillListResponse)
    );
  }

  /**
   * Path part for operation postUserSkills
   */
  static readonly PostUserSkillsPath = '/user-skills';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserSkills()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postUserSkills$Response(params: {
    context?: HttpContext
    body: UserSkillRequest
  }
): Observable<StrictHttpResponse<UserSkillResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserSkillService.PostUserSkillsPath, 'post');
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
        return r as StrictHttpResponse<UserSkillResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserSkills$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postUserSkills(params: {
    context?: HttpContext
    body: UserSkillRequest
  }
): Observable<UserSkillResponse> {

    return this.postUserSkills$Response(params).pipe(
      map((r: StrictHttpResponse<UserSkillResponse>) => r.body as UserSkillResponse)
    );
  }

  /**
   * Path part for operation getUserSkillsId
   */
  static readonly GetUserSkillsIdPath = '/user-skills/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserSkillsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserSkillsId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserSkillResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserSkillService.GetUserSkillsIdPath, 'get');
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
        return r as StrictHttpResponse<UserSkillResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserSkillsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserSkillsId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<UserSkillResponse> {

    return this.getUserSkillsId$Response(params).pipe(
      map((r: StrictHttpResponse<UserSkillResponse>) => r.body as UserSkillResponse)
    );
  }

  /**
   * Path part for operation putUserSkillsId
   */
  static readonly PutUserSkillsIdPath = '/user-skills/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putUserSkillsId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putUserSkillsId$Response(params: {
    id: number;
    context?: HttpContext
    body: UserSkillRequest
  }
): Observable<StrictHttpResponse<UserSkillResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserSkillService.PutUserSkillsIdPath, 'put');
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
        return r as StrictHttpResponse<UserSkillResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putUserSkillsId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putUserSkillsId(params: {
    id: number;
    context?: HttpContext
    body: UserSkillRequest
  }
): Observable<UserSkillResponse> {

    return this.putUserSkillsId$Response(params).pipe(
      map((r: StrictHttpResponse<UserSkillResponse>) => r.body as UserSkillResponse)
    );
  }

  /**
   * Path part for operation deleteUserSkillsId
   */
  static readonly DeleteUserSkillsIdPath = '/user-skills/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserSkillsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserSkillsId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UserSkillService.DeleteUserSkillsIdPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteUserSkillsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserSkillsId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.deleteUserSkillsId$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
