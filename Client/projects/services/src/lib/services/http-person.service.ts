
import { Injectable } from '@angular/core'; 
import { HttpRequestModel } from 'models';
import { Iperson } from 'models';
import { HttpServiceBase } from './http-service.base';

@Injectable({ providedIn: 'root' })
export class PersonHttpService extends HttpServiceBase {

  private get _serverUrl(): string {
     return `${this.config.ips.servicePath}api/Person/`;
  }

   
  insertPerson$(person: Iperson) {    
    return this.post$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'CreatePerson',
      body: person
    }));
  }

}


