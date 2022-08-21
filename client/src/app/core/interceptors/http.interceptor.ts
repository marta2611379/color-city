import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // const token = localStorage.getItem('access-token');
    // if (token) {
    //   request = request.clone({
    //     headers: request.headers.set('Authorization', `Bearer ${token}`),
    //   });
    // }

    if (request.url.startsWith('/') === true) {
      let apiUrl = environment.apiUrl;
      request = request.clone({ url: `${apiUrl}${request.url}` });
    }

    return next.handle(request);
  }
}
