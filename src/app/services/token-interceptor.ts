import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { SessionStorageService } from 'app/services/session-storage.service';
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: SessionStorageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      var token: any;
      var user: any;
      user = this.auth.get('user');
      //token = user && user.userToken;

        token=JSON.parse(JSON.stringify(""+user));

  //console.log("user token"+ user.userToken);
     if(user != null)
     {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${user.userToken}`
          }
        });
     }
    return next.handle(request);
  }
}