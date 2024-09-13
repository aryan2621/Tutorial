import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.includes(' ')) {
      // do something
    }
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz'),
      // params: req.params.append('auth', 'xyz'),
    });
    console.log('Request is on its way');

    // intercept the request and add a new header
    // interceptors are the way to add common headers to all requests that are sent
    // it helps in adding headers to all requests

    // return next.handle(req);
    return next.handle(modifiedRequest).pipe(
      tap((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.Response) {
          console.log('Response arrived, body data: ');
          console.log(event.body);
        }
      })
    );
  }
}
