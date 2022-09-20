import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifyObjForCard',
})
export class ModifyObjForCardPipe implements PipeTransform {
  transform(arrGoods: any[]): any {
    let tempArr: Array<Array<any>> = [[]];
    let count = 0;
    let push: boolean = false;
    if (arrGoods)
      arrGoods.forEach((g, i) => {
        push = false;
        if (i == 0) {
          tempArr[count].push(g);
          push = true;
        } else {
          tempArr.map((arr, i_arr) => {
            if (arr[0].unit + arr[0].volume == g.unit + g.volume) {
              arr.push(g);
              push = true;
            }
          });
          if (!push) {
            count++;
            if (!tempArr[count]) tempArr[count] = new Array();
            tempArr[count].push(g);
          }
        }
      });
    return tempArr;
  }
}
