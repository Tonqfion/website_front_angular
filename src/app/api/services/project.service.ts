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

import { ProjectListResponse } from '../models/project-list-response';
import { ProjectRequest } from '../models/project-request';
import { ProjectResponse } from '../models/project-response';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getProjects
   */
  static readonly GetProjectsPath = '/projects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProjects()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjects$Response(params?: {

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
): Observable<StrictHttpResponse<ProjectListResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.GetProjectsPath, 'get');
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
        return r as StrictHttpResponse<ProjectListResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProjects$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjects(params?: {

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
): Observable<ProjectListResponse> {

    return this.getProjects$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectListResponse>) => r.body as ProjectListResponse)
    );
  }

  /**
   * Path part for operation postProjects
   */
  static readonly PostProjectsPath = '/projects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postProjects()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postProjects$Response(params: {
    context?: HttpContext
    body: ProjectRequest
  }
): Observable<StrictHttpResponse<ProjectResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.PostProjectsPath, 'post');
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
        return r as StrictHttpResponse<ProjectResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postProjects$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postProjects(params: {
    context?: HttpContext
    body: ProjectRequest
  }
): Observable<ProjectResponse> {

    return this.postProjects$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectResponse>) => r.body as ProjectResponse)
    );
  }

  /**
   * Path part for operation getProjectsId
   */
  static readonly GetProjectsIdPath = '/projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProjectsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjectsId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProjectResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.GetProjectsIdPath, 'get');
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
        return r as StrictHttpResponse<ProjectResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProjectsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProjectsId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<ProjectResponse> {

    return this.getProjectsId$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectResponse>) => r.body as ProjectResponse)
    );
  }

  /**
   * Path part for operation putProjectsId
   */
  static readonly PutProjectsIdPath = '/projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putProjectsId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putProjectsId$Response(params: {
    id: number;
    context?: HttpContext
    body: ProjectRequest
  }
): Observable<StrictHttpResponse<ProjectResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.PutProjectsIdPath, 'put');
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
        return r as StrictHttpResponse<ProjectResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putProjectsId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putProjectsId(params: {
    id: number;
    context?: HttpContext
    body: ProjectRequest
  }
): Observable<ProjectResponse> {

    return this.putProjectsId$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectResponse>) => r.body as ProjectResponse)
    );
  }

  /**
   * Path part for operation deleteProjectsId
   */
  static readonly DeleteProjectsIdPath = '/projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProjectsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProjectsId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.DeleteProjectsIdPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteProjectsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProjectsId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.deleteProjectsId$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
