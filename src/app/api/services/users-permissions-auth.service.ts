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

import { Error } from '../models/error';
import { UsersPermissionsUserRegistration } from '../models/users-permissions-user-registration';


/**
 * Authentication endpoints
 */
@Injectable({
  providedIn: 'root',
})
export class UsersPermissionsAuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation connectGet
   */
  static readonly ConnectGetPath = '/connect/(.*)';

  /**
   * Login with a provider.
   *
   * Redirects to provider login before being redirect to /auth/{provider}/callback
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `connectGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  connectGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Error>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsAuthService.ConnectGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Error>;
      })
    );
  }

  /**
   * Login with a provider.
   *
   * Redirects to provider login before being redirect to /auth/{provider}/callback
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `connectGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  connectGet(params?: {
    context?: HttpContext
  }
): Observable<Error> {

    return this.connectGet$Response(params).pipe(
      map((r: StrictHttpResponse<Error>) => r.body as Error)
    );
  }

  /**
   * Path part for operation authLocalPost
   */
  static readonly AuthLocalPostPath = '/auth/local';

  /**
   * Local login.
   *
   * Returns a jwt token and user info
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLocalPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authLocalPost$Response(params: {
    context?: HttpContext
    body: {
'identifier'?: string;
'password'?: string;
}
  }
): Observable<StrictHttpResponse<UsersPermissionsUserRegistration>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsAuthService.AuthLocalPostPath, 'post');
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
        return r as StrictHttpResponse<UsersPermissionsUserRegistration>;
      })
    );
  }

  /**
   * Local login.
   *
   * Returns a jwt token and user info
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authLocalPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authLocalPost(params: {
    context?: HttpContext
    body: {
'identifier'?: string;
'password'?: string;
}
  }
): Observable<UsersPermissionsUserRegistration> {

    return this.authLocalPost$Response(params).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUserRegistration>) => r.body as UsersPermissionsUserRegistration)
    );
  }

  /**
   * Path part for operation authLocalRegisterPost
   */
  static readonly AuthLocalRegisterPostPath = '/auth/local/register';

  /**
   * Register a user.
   *
   * Returns a jwt token and user info
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLocalRegisterPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authLocalRegisterPost$Response(params: {
    context?: HttpContext
    body: {
'username'?: string;
'email'?: string;
'password'?: string;
}
  }
): Observable<StrictHttpResponse<UsersPermissionsUserRegistration>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsAuthService.AuthLocalRegisterPostPath, 'post');
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
        return r as StrictHttpResponse<UsersPermissionsUserRegistration>;
      })
    );
  }

  /**
   * Register a user.
   *
   * Returns a jwt token and user info
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authLocalRegisterPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authLocalRegisterPost(params: {
    context?: HttpContext
    body: {
'username'?: string;
'email'?: string;
'password'?: string;
}
  }
): Observable<UsersPermissionsUserRegistration> {

    return this.authLocalRegisterPost$Response(params).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUserRegistration>) => r.body as UsersPermissionsUserRegistration)
    );
  }

  /**
   * Path part for operation authProviderCallbackGet
   */
  static readonly AuthProviderCallbackGetPath = '/auth/{provider}/callback';

  /**
   * Default Callback from provider auth.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authProviderCallbackGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  authProviderCallbackGet$Response(params: {

    /**
     * Provider name
     */
    provider: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UsersPermissionsUserRegistration>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsAuthService.AuthProviderCallbackGetPath, 'get');
    if (params) {
      rb.path('provider', params.provider, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsersPermissionsUserRegistration>;
      })
    );
  }

  /**
   * Default Callback from provider auth.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authProviderCallbackGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authProviderCallbackGet(params: {

    /**
     * Provider name
     */
    provider: string;
    context?: HttpContext
  }
): Observable<UsersPermissionsUserRegistration> {

    return this.authProviderCallbackGet$Response(params).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUserRegistration>) => r.body as UsersPermissionsUserRegistration)
    );
  }

  /**
   * Path part for operation authForgotPasswordPost
   */
  static readonly AuthForgotPasswordPostPath = '/auth/forgot-password';

  /**
   * Send rest password email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authForgotPasswordPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authForgotPasswordPost$Response(params: {
    context?: HttpContext
    body: {
'email'?: string;
}
  }
): Observable<StrictHttpResponse<{
'ok'?: 'true';
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsAuthService.AuthForgotPasswordPostPath, 'post');
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
   * Send rest password email.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authForgotPasswordPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authForgotPasswordPost(params: {
    context?: HttpContext
    body: {
'email'?: string;
}
  }
): Observable<{
'ok'?: 'true';
}> {

    return this.authForgotPasswordPost$Response(params).pipe(
      map((r: StrictHttpResponse<{
'ok'?: 'true';
}>) => r.body as {
'ok'?: 'true';
})
    );
  }

  /**
   * Path part for operation authResetPasswordPost
   */
  static readonly AuthResetPasswordPostPath = '/auth/reset-password';

  /**
   * Rest user password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authResetPasswordPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authResetPasswordPost$Response(params: {
    context?: HttpContext
    body: {
'password'?: string;
'passwordConfirmation'?: string;
'code'?: string;
}
  }
): Observable<StrictHttpResponse<UsersPermissionsUserRegistration>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsAuthService.AuthResetPasswordPostPath, 'post');
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
        return r as StrictHttpResponse<UsersPermissionsUserRegistration>;
      })
    );
  }

  /**
   * Rest user password.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authResetPasswordPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authResetPasswordPost(params: {
    context?: HttpContext
    body: {
'password'?: string;
'passwordConfirmation'?: string;
'code'?: string;
}
  }
): Observable<UsersPermissionsUserRegistration> {

    return this.authResetPasswordPost$Response(params).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUserRegistration>) => r.body as UsersPermissionsUserRegistration)
    );
  }

  /**
   * Path part for operation authChangePasswordPost
   */
  static readonly AuthChangePasswordPostPath = '/auth/change-password';

  /**
   * Update user's own password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authChangePasswordPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authChangePasswordPost$Response(params: {
    context?: HttpContext
    body: {
'password': string;
'currentPassword': string;
'passwordConfirmation': string;
}
  }
): Observable<StrictHttpResponse<UsersPermissionsUserRegistration>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsAuthService.AuthChangePasswordPostPath, 'post');
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
        return r as StrictHttpResponse<UsersPermissionsUserRegistration>;
      })
    );
  }

  /**
   * Update user's own password.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authChangePasswordPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authChangePasswordPost(params: {
    context?: HttpContext
    body: {
'password': string;
'currentPassword': string;
'passwordConfirmation': string;
}
  }
): Observable<UsersPermissionsUserRegistration> {

    return this.authChangePasswordPost$Response(params).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUserRegistration>) => r.body as UsersPermissionsUserRegistration)
    );
  }

  /**
   * Path part for operation authEmailConfirmationGet
   */
  static readonly AuthEmailConfirmationGetPath = '/auth/email-confirmation';

  /**
   * Confirm user email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authEmailConfirmationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  authEmailConfirmationGet$Response(params?: {

    /**
     * confirmation token received by email
     */
    confirmation?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Error>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsAuthService.AuthEmailConfirmationGetPath, 'get');
    if (params) {
      rb.query('confirmation', params.confirmation, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Error>;
      })
    );
  }

  /**
   * Confirm user email.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authEmailConfirmationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authEmailConfirmationGet(params?: {

    /**
     * confirmation token received by email
     */
    confirmation?: string;
    context?: HttpContext
  }
): Observable<Error> {

    return this.authEmailConfirmationGet$Response(params).pipe(
      map((r: StrictHttpResponse<Error>) => r.body as Error)
    );
  }

  /**
   * Path part for operation authSendEmailConfirmationPost
   */
  static readonly AuthSendEmailConfirmationPostPath = '/auth/send-email-confirmation';

  /**
   * Send confirmation email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authSendEmailConfirmationPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authSendEmailConfirmationPost$Response(params: {
    context?: HttpContext
    body: {
'email'?: string;
}
  }
): Observable<StrictHttpResponse<{
'email'?: string;
'sent'?: 'true';
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersPermissionsAuthService.AuthSendEmailConfirmationPostPath, 'post');
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
        'email'?: string;
        'sent'?: 'true';
        }>;
      })
    );
  }

  /**
   * Send confirmation email.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authSendEmailConfirmationPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authSendEmailConfirmationPost(params: {
    context?: HttpContext
    body: {
'email'?: string;
}
  }
): Observable<{
'email'?: string;
'sent'?: 'true';
}> {

    return this.authSendEmailConfirmationPost$Response(params).pipe(
      map((r: StrictHttpResponse<{
'email'?: string;
'sent'?: 'true';
}>) => r.body as {
'email'?: string;
'sent'?: 'true';
})
    );
  }

}
