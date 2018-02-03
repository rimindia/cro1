import { Injectable, EventEmitter  } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {userInfo} from "os";
import { Login } from 'app/+auth/+login/login';
import { Config } from '../shared/config/env.config';


@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
    userToken: string;
  constructor(private router: Router, private http: HttpClient){}

  login( logindata: Login): any {
      let loginHeader = {headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ${userToken}'}) };
      return this.http
          .post(Config.LoginEndpoint, JSON.stringify(logindata) , loginHeader)
              .toPromise()
              .then((response: any) => {
                  //console.log(response);
                  return response;

              })
              .catch((error) => {                
                console.log(error);
                return Promise.reject(error);

              });
  }

  logout(): any {
    this.isLoggedIn = false;

    return this.http
              .post(Config.LogoutEndpoint, {})
              .toPromise()
              .then((response: any) => {
                return response;
              })
              .catch((error) => {
                return Promise.reject(error);
              });
  }
}
