import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitVolumeColors',
})
export class UnitVolumeColorsPipe implements PipeTransform {
  transform(arrayGoods: any[]): any[] {
    let temp = arrayGoods.map((v) => v.colors);
    console.log(temp);

    return temp;
  }
}
