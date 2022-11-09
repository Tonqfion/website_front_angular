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

import { CompanyListResponse } from '../models/company-list-response';
import { CompanyRequest } from '../models/company-request';
import { CompanyResponse } from '../models/company-response';

@Injectable({
  providedIn: 'root',
})
export class CompanyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCompanies
   */
  static readonly GetCompaniesPath = '/companies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCompanies()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompanies$Response(params?: {

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
): Observable<StrictHttpResponse<CompanyListResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.GetCompaniesPath, 'get');
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
        return r as StrictHttpResponse<CompanyListResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCompanies$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompanies(params?: {

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
): Observable<CompanyListResponse> {

    return this.getCompanies$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyListResponse>) => r.body as CompanyListResponse)
    );
  }

  /**
   * Path part for operation postCompanies
   */
  static readonly PostCompaniesPath = '/companies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCompanies()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCompanies$Response(params: {
    context?: HttpContext
    body: CompanyRequest
  }
): Observable<StrictHttpResponse<CompanyResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.PostCompaniesPath, 'post');
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
        return r as StrictHttpResponse<CompanyResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postCompanies$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCompanies(params: {
    context?: HttpContext
    body: CompanyRequest
  }
): Observable<CompanyResponse> {

    return this.postCompanies$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyResponse>) => r.body as CompanyResponse)
    );
  }

  /**
   * Path part for operation getCompaniesId
   */
  static readonly GetCompaniesIdPath = '/companies/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCompaniesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompaniesId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CompanyResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.GetCompaniesIdPath, 'get');
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
        return r as StrictHttpResponse<CompanyResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCompaniesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompaniesId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<CompanyResponse> {

    return this.getCompaniesId$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyResponse>) => r.body as CompanyResponse)
    );
  }

  /**
   * Path part for operation putCompaniesId
   */
  static readonly PutCompaniesIdPath = '/companies/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putCompaniesId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putCompaniesId$Response(params: {
    id: number;
    context?: HttpContext
    body: CompanyRequest
  }
): Observable<StrictHttpResponse<CompanyResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.PutCompaniesIdPath, 'put');
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
        return r as StrictHttpResponse<CompanyResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putCompaniesId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putCompaniesId(params: {
    id: number;
    context?: HttpContext
    body: CompanyRequest
  }
): Observable<CompanyResponse> {

    return this.putCompaniesId$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyResponse>) => r.body as CompanyResponse)
    );
  }

  /**
   * Path part for operation deleteCompaniesId
   */
  static readonly DeleteCompaniesIdPath = '/companies/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCompaniesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCompaniesId$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.DeleteCompaniesIdPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteCompaniesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCompaniesId(params: {
    id: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.deleteCompaniesId$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
