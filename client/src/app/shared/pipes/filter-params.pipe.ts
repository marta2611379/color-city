import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterParams',
})
export class FilterParamsPipe implements PipeTransform {
  transform(obj: any): string {
    let params = '';
    if (obj && Object.keys(obj).length) {
      Object.keys(obj).forEach((key: string) => {
        if (obj[key]) {
          params += `${key}=${obj[key]}&`;
        }
      });
    } else params += `page=1`;
    return params;
  }
}
