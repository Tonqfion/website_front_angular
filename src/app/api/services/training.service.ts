/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpContext, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {RequestBuilder} from '../request-builder';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {TrainingListResponse} from '../models/training-list-response';
import {TrainingRequest} from '../models/training-request';
import {TrainingResponse} from '../models/training-response';

@Injectable({
  providedIn: 'root',
})
export class TrainingService extends BaseService {
  /**
   * Path part for operation getTrainings
   */
  static readonly GetTrainingsPath = '/trainings';
  /**
   * Path part for operation postTrainings
   */
  static readonly PostTrainingsPath = '/trainings';
  /**
   * Path part for operation getTrainingsId
   */
  static readonly GetTrainingsIdPath = '/trainings/{id}';
  /**
   * Path part for operation putTrainingsId
   */
  static readonly PutTrainingsIdPath = '/trainings/{id}';
  /**
   * Path part for operation deleteTrainingsId
   */
  static readonly DeleteTrainingsIdPath = '/trainings/{id}';

  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTrainings()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTrainings$Response(params?: {

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
                          filters?: {};
                          context?: HttpContext
                        }
  ): Observable<StrictHttpResponse<TrainingListResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TrainingService.GetTrainingsPath, 'get');
    if (params) {
      rb.query('sort', params.sort, {});
      rb.query('pagination[withCount]', params['pagination[withCount]'], {});
      rb.query('pagination[page]', params['pagination[page]'], {});
      rb.query('pagination[pageSize]', params['pagination[pageSize]'], {});
      rb.query('pagination[start]', params['pagination[start]'], {});
      rb.query('pagination[limit]', params['pagination[limit]'], {});
      rb.query('fields', params.fields, {});
      rb.query('populate', params.populate, {});
      rb.query('filters', params.filters, {"style": "deepObject"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TrainingListResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTrainings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTrainings(params?: {

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
                 filters?: {};
                 context?: HttpContext
               }
  ): Observable<TrainingListResponse> {

    return this.getTrainings$Response(params).pipe(
      map((r: StrictHttpResponse<TrainingListResponse>) => r.body as TrainingListResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTrainings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTrainings$Response(params: {
                           context?: HttpContext
                           body: TrainingRequest
                         }
  ): Observable<StrictHttpResponse<TrainingResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TrainingService.PostTrainingsPath, 'post');
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
        return r as StrictHttpResponse<TrainingResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTrainings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postTrainings(params: {
                  context?: HttpContext
                  body: TrainingRequest
                }
  ): Observable<TrainingResponse> {

    return this.postTrainings$Response(params).pipe(
      map((r: StrictHttpResponse<TrainingResponse>) => r.body as TrainingResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTrainingsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTrainingsId$Response(params: {
                            id: number;
                            context?: HttpContext
                          }
  ): Observable<StrictHttpResponse<TrainingResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TrainingService.GetTrainingsIdPath, 'get');
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
        return r as StrictHttpResponse<TrainingResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTrainingsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTrainingsId(params: {
                   id: number;
                   context?: HttpContext
                 }
  ): Observable<TrainingResponse> {

    return this.getTrainingsId$Response(params).pipe(
      map((r: StrictHttpResponse<TrainingResponse>) => r.body as TrainingResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putTrainingsId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putTrainingsId$Response(params: {
                            id: number;
                            context?: HttpContext
                            body: TrainingRequest
                          }
  ): Observable<StrictHttpResponse<TrainingResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TrainingService.PutTrainingsIdPath, 'put');
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
        return r as StrictHttpResponse<TrainingResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putTrainingsId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putTrainingsId(params: {
                   id: number;
                   context?: HttpContext
                   body: TrainingRequest
                 }
  ): Observable<TrainingResponse> {

    return this.putTrainingsId$Response(params).pipe(
      map((r: StrictHttpResponse<TrainingResponse>) => r.body as TrainingResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTrainingsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTrainingsId$Response(params: {
                               id: number;
                               context?: HttpContext
                             }
  ): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TrainingService.DeleteTrainingsIdPath, 'delete');
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
        return (r as HttpResponse<any>).clone({body: parseFloat(String((r as HttpResponse<any>).body))}) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTrainingsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTrainingsId(params: {
                      id: number;
                      context?: HttpContext
                    }
  ): Observable<number> {

    return this.deleteTrainingsId$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
