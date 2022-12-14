import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterParamsPipe } from './filter-params.pipe';
import { SortByPipe } from './sortBy.pipe';
import { ModifyObjForCardPipe } from './modify-obj-for-card.pipe';
import { ReadBufferImgPipe } from './read-buffer-img.pipe';
import { UnitVolumeColorsPipe } from './unit-volume-colors.pipe';
import { EmptyInfoPipe } from './empty-info.pipe';

const basicPipes = [
  FilterParamsPipe,
  SortByPipe,
  ModifyObjForCardPipe,
  ReadBufferImgPipe,
  UnitVolumeColorsPipe,
  EmptyInfoPipe,
];

@NgModule({
  imports: [CommonModule],
  declarations: [basicPipes],
  exports: [basicPipes],
})
export class PipesModule {}
