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

import { UsersPermissionsPermissionsTree } from '../models/users-permissions-permissions-tree';
import { UsersPermissionsRole } from '../models/users-permissions-role';
import { UsersPermissionsUser } from '../models/users-permissions-user';


/**
 * Users, roles, and permissions endpoints
 */
@Injectable({
  providedIn: 'root',
})
export class UsersPermissionsUsersRolesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation usersPermissionsPermissionsGet
   */
  static readonly UsersPermissionsPermissionsGetPath = '/users-permissions/permissions';

  /**
   * Get default generated permissions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPermissionsPermissionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsPermissionsGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<{
'permissions'?: UsersPermissionsPermissionsTree;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsUsersRolesService.UsersPermissionsPermissionsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'permissions'?: UsersPermissionsPermissionsTree;
        }>;
      })
    );
  }

  /**
   * Get default generated permissions.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersPermissionsPermissionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsPermissionsGet(params?: {
    context?: HttpContext
  }
): Observable<{
'permissions'?: UsersPermissionsPermissionsTree;
}> {

    return this.usersPermissionsPermissionsGet$Response(params).pipe(
      map((r: StrictHttpResponse<{
'permissions'?: UsersPermissionsPermissionsTree;
}>) => r.body as {
'permissions'?: UsersPermissionsPermissionsTree;
})
    );
  }

  /**
   * Path part for operation usersPermissionsRolesIdGet
   */
  static readonly UsersPermissionsRolesIdGetPath = '/users-permissions/roles/{id}';

  /**
   * Get a role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPermissionsRolesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsRolesIdGet$Response(params: {

    /**
     * role Id
     */
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<{
'role'?: UsersPermissionsRole;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsUsersRolesService.UsersPermissionsRolesIdGetPath, 'get');
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
        return r as StrictHttpResponse<{
        'role'?: UsersPermissionsRole;
        }>;
      })
    );
  }

  /**
   * Get a role.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersPermissionsRolesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsRolesIdGet(params: {

    /**
     * role Id
     */
    id: string;
    context?: HttpContext
  }
): Observable<{
'role'?: UsersPermissionsRole;
}> {

    return this.usersPermissionsRolesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<{
'role'?: UsersPermissionsRole;
}>) => r.body as {
'role'?: UsersPermissionsRole;
})
    );
  }

  /**
   * Path part for operation usersPermissionsRolesGet
   */
  static readonly UsersPermissionsRolesGetPath = '/users-permissions/roles';

  /**
   * List roles.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPermissionsRolesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsRolesGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<{
'roles'?: Array<UsersPermissionsRole & {
'nb_users'?: number;
}>;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsUsersRolesService.UsersPermissionsRolesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'roles'?: Array<UsersPermissionsRole & {
        'nb_users'?: number;
        }>;
        }>;
      })
    );
  }

  /**
   * List roles.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersPermissionsRolesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsRolesGet(params?: {
    context?: HttpContext
  }
): Observable<{
'roles'?: Array<UsersPermissionsRole & {
'nb_users'?: number;
}>;
}> {

    return this.usersPermissionsRolesGet$Response(params).pipe(
      map((r: StrictHttpResponse<{
'roles'?: Array<UsersPermissionsRole & {
'nb_users'?: number;
}>;
}>) => r.body as {
'roles'?: Array<UsersPermissionsRole & {
'nb_users'?: number;
}>;
})
    );
  }

  /**
   * Path part for operation usersPermissionsRolesPost
   */
  static readonly UsersPermissionsRolesPostPath = '/users-permissions/roles';

  /**
   * Create a role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPermissionsRolesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPermissionsRolesPost$Response(params: {
    context?: HttpContext
    body: {
'name'?: string;
'description'?: string;
'type'?: string;
'permissions'?: UsersPermissionsPermissionsTree;
}
  }
): Observable<StrictHttpResponse<{
'ok'?: 'true';
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsUsersRolesService.UsersPermissionsRolesPostPath, 'post');
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
        return r as StrictHttpResponse<{
        'ok'?: 'true';
        }>;
      })
    );
  }

  /**
   * Create a role.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersPermissionsRolesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPermissionsRolesPost(params: {
    context?: HttpContext
    body: {
'name'?: string;
'description'?: string;
'type'?: string;
'permissions'?: UsersPermissionsPermissionsTree;
}
  }
): Observable<{
'ok'?: 'true';
}> {

    return this.usersPermissionsRolesPost$Response(params).pipe(
      map((r: StrictHttpResponse<{
'ok'?: 'true';
}>) => r.body as {
'ok'?: 'true';
})
    );
  }

  /**
   * Path part for operation usersPermissionsRolesRolePut
   */
  static readonly UsersPermissionsRolesRolePutPath = '/users-permissions/roles/{role}';

  /**
   * Update a role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPermissionsRolesRolePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPermissionsRolesRolePut$Response(params: {

    /**
     * role Id
     */
    role: string;
    context?: HttpContext
    body: {
'name'?: string;
'description'?: string;
'type'?: string;
'permissions'?: UsersPermissionsPermissionsTree;
}
  }
): Observable<StrictHttpResponse<{
'ok'?: 'true';
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsUsersRolesService.UsersPermissionsRolesRolePutPath, 'put');
    if (params) {
      rb.path('role', params.role, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'ok'?: 'true';
        }>;
      })
    );
  }

  /**
   * Update a role.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersPermissionsRolesRolePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPermissionsRolesRolePut(params: {

    /**
     * role Id
     */
    role: string;
    context?: HttpContext
    body: {
'name'?: string;
'description'?: string;
'type'?: string;
'permissions'?: UsersPermissionsPermissionsTree;
}
  }
): Observable<{
'ok'?: 'true';
}> {

    return this.usersPermissionsRolesRolePut$Response(params).pipe(
      map((r: StrictHttpResponse<{
'ok'?: 'true';
}>) => r.body as {
'ok'?: 'true';
})
    );
  }

  /**
   * Path part for operation usersPermissionsRolesRoleDelete
   */
  static readonly UsersPermissionsRolesRoleDeletePath = '/users-permissions/roles/{role}';

  /**
   * Delete a role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPermissionsRolesRoleDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsRolesRoleDelete$Response(params: {

    /**
     * role Id
     */
    role: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<{
'ok'?: 'true';
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsUsersRolesService.UsersPermissionsRolesRoleDeletePath, 'delete');
    if (params) {
      rb.path('role', params.role, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'ok'?: 'true';
        }>;
      })
    );
  }

  /**
   * Delete a role.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersPermissionsRolesRoleDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsRolesRoleDelete(params: {

    /**
     * role Id
     */
    role: string;
    context?: HttpContext
  }
): Observable<{
'ok'?: 'true';
}> {

    return this.usersPermissionsRolesRoleDelete$Response(params).pipe(
      map((r: StrictHttpResponse<{
'ok'?: 'true';
}>) => r.body as {
'ok'?: 'true';
})
    );
  }

  /**
   * Path part for operation usersCountGet
   */
  static readonly UsersCountGetPath = '/users/count';

  /**
   * Get user count.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersCountGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersCountGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsUsersRolesService.UsersCountGetPath, 'get');
    if (params) {
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
   * Get user count.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersCountGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersCountGet(params?: {
    context?: HttpContext
  }
): Observable<number> {

    return this.usersCountGet$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation usersGet
   */
  static readonly UsersGetPath = '/users';

  /**
   * Get list of users.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UsersPermissionsUser>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsUsersRolesService.UsersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UsersPermissionsUser>>;
      })
    );
  }

  /**
   * Get list of users.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGet(params?: {
    context?: HttpContext
  }
): Observable<Array<UsersPermissionsUser>> {

    return this.usersGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UsersPermissionsUser>>) => r.body as Array<UsersPermissionsUser>)
    );
  }

  /**
   * Path part for operation usersPost
   */
  static readonly UsersPostPath = '/users';

  /**
   * Create a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPost$Response(params: {
    context?: HttpContext
    body: {
'email': string;
'username': string;
'password': string;
}
  }
): Observable<StrictHttpResponse<UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsUsersRolesService.UsersPostPath, 'post');
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
        return r as StrictHttpResponse<UsersPermissionsUser & {
        'role'?: UsersPermissionsRole;
        }>;
      })
    );
  }

  /**
   * Create a user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPost(params: {
    context?: HttpContext
    body: {
'email': string;
'username': string;
'password': string;
}
  }
): Observable<UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
}> {

    return this.usersPost$Response(params).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
}>) => r.body as UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
})
    );
  }

  /**
   * Path part for operation usersMeGet
   */
  static readonly UsersMeGetPath = '/users/me';

  /**
   * Get authenticated user info.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersMeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersMeGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UsersPermissionsUser>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsUsersRolesService.UsersMeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsersPermissionsUser>;
      })
    );
  }

  /**
   * Get authenticated user info.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersMeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersMeGet(params?: {
    context?: HttpContext
  }
): Observable<UsersPermissionsUser> {

    return this.usersMeGet$Response(params).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUser>) => r.body as UsersPermissionsUser)
    );
  }

  /**
   * Path part for operation usersIdGet
   */
  static readonly UsersIdGetPath = '/users/{id}';

  /**
   * Get a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdGet$Response(params: {

    /**
     * user Id
     */
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UsersPermissionsUser>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsUsersRolesService.UsersIdGetPath, 'get');
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
        return r as StrictHttpResponse<UsersPermissionsUser>;
      })
    );
  }

  /**
   * Get a user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdGet(params: {

    /**
     * user Id
     */
    id: string;
    context?: HttpContext
  }
): Observable<UsersPermissionsUser> {

    return this.usersIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUser>) => r.body as UsersPermissionsUser)
    );
  }

  /**
   * Path part for operation usersIdPut
   */
  static readonly UsersIdPutPath = '/users/{id}';

  /**
   * Update a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersIdPut$Response(params: {

    /**
     * user Id
     */
    id: string;
    context?: HttpContext
    body: {
'email': string;
'username': string;
'password': string;
}
  }
): Observable<StrictHttpResponse<UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsUsersRolesService.UsersIdPutPath, 'put');
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
        return r as StrictHttpResponse<UsersPermissionsUser & {
        'role'?: UsersPermissionsRole;
        }>;
      })
    );
  }

  /**
   * Update a user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersIdPut(params: {

    /**
     * user Id
     */
    id: string;
    context?: HttpContext
    body: {
'email': string;
'username': string;
'password': string;
}
  }
): Observable<UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
}> {

    return this.usersIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
}>) => r.body as UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
})
    );
  }

  /**
   * Path part for operation usersIdDelete
   */
  static readonly UsersIdDeletePath = '/users/{id}';

  /**
   * Delete a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdDelete$Response(params: {

    /**
     * user Id
     */
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UsersPermissionsUser>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsUsersRolesService.UsersIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<UsersPermissionsUser>;
      })
    );
  }

  /**
   * Delete a user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdDelete(params: {

    /**
     * user Id
     */
    id: string;
    context?: HttpContext
  }
): Observable<UsersPermissionsUser> {

    return this.usersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUser>) => r.body as UsersPermissionsUser)
    );
  }

}
