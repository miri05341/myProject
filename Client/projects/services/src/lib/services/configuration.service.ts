import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { IpConfig } from 'models';


@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  ips: IpConfig = {};

  constructor(
    private http: HttpClient) {
  }

  initConfiguration(path: any): Promise<any> {
    return combineLatest(
      this.http.get<IpConfig>(`${path}/ipConfig.json`),
    ).pipe(
      tap(response => [this.ips] = response),
    ).toPromise();
  }
}