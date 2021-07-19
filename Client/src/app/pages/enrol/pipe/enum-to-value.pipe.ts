import { Pipe, PipeTransform } from '@angular/core';

@Pipe({  name: 'enumToValue'})
export class EnumToValuePipe implements PipeTransform {

  transform(enumType: object): string[] {
      return Object.entries(enumType).slice(0,Object.keys(enumType).length/2) 
      .map(([,val]) => val);
  }

}
