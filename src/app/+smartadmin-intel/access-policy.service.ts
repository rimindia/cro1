import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import {AccessPolicy} from './access-policy';
import { AuthService } from '../+auth/auth.service';
import { SessionStorageService } from 'app/services/session-storage.service';
import { Config } from '../shared/config/env.config';

@Injectable()
export class AccessPolicyService {

    /*allAccessUrl = "http://localhost:8080/accessPolicy/getAllAccessPolicies";*/
    constructor(private http:HttpClient, private auth: AuthService, private session: SessionStorageService) { }

    getAllAccess(): any {
        return this.http.get(Config.BaseEndpoint +'accessPolicy/getAllAccessPolicies')
            .toPromise()
            .then((response: any) => {
                console.log("successfully saved");
                return response;
            })
            .catch((error) => {
                return Promise.reject(error);

            });

    }

    createAccess(access: AccessPolicy): any {
        let cpHeaders= {headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'})};

        return this.http.post(Config.BaseEndpoint +'accessPolicy/saveAccessPolicy', JSON.stringify(access), cpHeaders)
            .toPromise()
            .then((response: any) => {
                console.log("successfully saved");
                return response;
            })
            .catch((error) => {
                return Promise.reject(error);

            });
    }

    /*getAccessById(accessId: string): Observable<AccessPolicy> {
        /!*let cpHeaders = new Headers({ 'Content-Type': 'application/json' });*!/
        let cpHeaders
        cpHeaders= new Headers({ 'Content-Type': 'application/json' });
        cpHeaders = new Headers({ 'Authorization': 'Bearer' + 'token' });
        let cpParams = new URLSearchParams();
        cpParams.set('policyId', accessId);
        let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
        return this.http.get(this.accessUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateAccess(access: AccessPolicy):Observable<number> {
        /!*let cpHeaders = new Headers({ 'Content-Type': 'application/json' });*!/
        let cpHeaders
        cpHeaders= new Headers({ 'Content-Type': 'application/json' });
        cpHeaders = new Headers({ 'Authorization': 'Bearer' + 'token' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.accessUrl, access, options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    deleteAccessById(accessId: string): Observable<number> {
        /!*let cpHeaders = new Headers({ 'Content-Type': 'application/json' });*!/
        let cpHeaders
        cpHeaders= new Headers({ 'Content-Type': 'application/json' });
        cpHeaders = new Headers({ 'Authorization': 'Bearer' + 'token' });
        let cpParams = new URLSearchParams();
        cpParams.set('policyId', accessId);
        let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
        return this.http.delete(this.accessUrl, options)
            .map(success => success.status)
            .catch(this.handleError);
    }*/

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }

}
