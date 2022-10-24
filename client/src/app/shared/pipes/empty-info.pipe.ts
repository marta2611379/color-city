import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyInfo',
})
export class EmptyInfoPipe implements PipeTransform {
  transform(value: any): string {
    if (value?.length) return value;
    else return '---';
  }
}
