

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'models';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';

@Injectable()
export abstract class HttpServiceBase {

    index = 0;
    constructor(
        protected http: HttpClient,
        protected config: ConfigurationService,
    ) { }

    post$<T = string>(httpRequest: HttpRequestModel): Observable<T> {
        if (httpRequest.isText) { return this._post$(httpRequest); }
        return this.http.post<T>(httpRequest.fullUrl, httpRequest.body,
            { headers: httpRequest.headers, params: { ...httpRequest.fullParams } });
    }

    private _post$(httpRequest: HttpRequestModel): Observable<any> {
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { params: { ...httpRequest.fullParams }, responseType: 'text' });
    }

    requestPost$(httpRequest: HttpRequestModel): Observable<HttpResponse<any>> {
        return this.http.request(
            'POST',
            httpRequest.fullUrl,
            {

                body: { ...httpRequest.body },
                params: { ...httpRequest.fullParams },
                observe: 'response',
                responseType: 'blob',

            }
        );
    }

}