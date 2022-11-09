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

import { ExperienceListResponse } from '../models/experience-list-response';
import { ExperienceRequest } from '../models/experience-request';
import { ExperienceResponse } from '../models/experience-response';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getExperiences
   */
  static readonly GetExperiencesPath = '/experiences';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getExperiences()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExperiences$Response(params?: {

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
): Observable<StrictHttpResponse<ExperienceListResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ExperienceService.GetExperiencesPath, 'get');
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
        return r as StrictHttpResponse<ExperienceListResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getExperiences$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExperiences(params?: {

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
): Observable<ExperienceListResponse> {

    return this.getExperiences$Response(params).pipe(
      map((r: StrictHttpResponse<ExperienceListResponse>) => r.body as ExperienceListResponse)
    );
  }

  /**
   * Path part for operation postExperiences
   */
  static readonly PostExperiencesPath = '/experiences';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postExperiences()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postExperiences$Response(params: {
    context?: HttpContext
    body: ExperienceRequest
  }
): Observable<StrictHttpResponse<ExperienceResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ExperienceService.PostExperiencesPath, 'post');
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
        return r as StrictHttpResponse<ExperienceResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postExperiences$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postExperiences(params: {
    context?: HttpContext
    body: ExperienceRequest
  }
): Observable<ExperienceResponse> {

    return this.postExperiences$Response(params).pipe(
      map((r: StrictHttpResponse<ExperienceResponse>) => r.body as ExperienceResponse)
    );
  }

  /**
   * Path part for operation getExperiencesId
   */
  static readonly GetExperiencesIdPath = '/experiences/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getExperiencesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExperiencesId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ExperienceResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ExperienceService.GetExperiencesIdPath, 'get');
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
        return r as StrictHttpResponse<ExperienceResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getExperiencesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getExperiencesId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<ExperienceResponse> {

    return this.getExperiencesId$Response(params).pipe(
      map((r: StrictHttpResponse<ExperienceResponse>) => r.body as ExperienceResponse)
    );
  }

  /**
   * Path part for operation putExperiencesId
   */
  static readonly PutExperiencesIdPath = '/experiences/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putExperiencesId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putExperiencesId$Response(params: {
    id: number;
    context?: HttpContext
    body: ExperienceRequest
  }
): Observable<StrictHttpResponse<ExperienceResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ExperienceService.PutExperiencesIdPath, 'put');
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
        return r as StrictHttpResponse<ExperienceResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putExperiencesId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putExperiencesId(params: {
    id: number;
    context?: HttpContext
    body: ExperienceRequest
  }
): Observable<ExperienceResponse> {

    return this.putExperiencesId$Response(params).pipe(
      map((r: StrictHttpResponse<ExperienceResponse>) => r.body as ExperienceResponse)
    );
  }

  /**
   * Path part for operation deleteExperiencesId
   */
  static readonly DeleteExperiencesIdPath = '/experiences/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteExperiencesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteExperiencesId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ExperienceService.DeleteExperiencesIdPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteExperiencesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteExperiencesId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.deleteExperiencesId$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
