import { Injectable } from '@angular/core';
import { Iperson } from 'models';

@Injectable({ providedIn: 'root' })
export class GetPersonService {


   getPerson(): Iperson {
      const personString = localStorage.getItem('person')?.toString()
      if (!personString) {
         return {
            firstName: '',
            lastName: '',
            ID: '',
            birthdate: '',
            kind: '',helth:'', child:[]
         }
      }
      return JSON.parse(personString);
   }
}
