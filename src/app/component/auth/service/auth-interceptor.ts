import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Constants} from '../../../utils/Constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt: string = localStorage.getItem(Constants.JWT);
    const cloned = req.clone({
      setHeaders: {
        Authorization: jwt
      }
    });
    return next.handle(cloned);
  }
}

