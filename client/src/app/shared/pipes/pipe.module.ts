import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterParamsPipe } from './filter-params.pipe';
import { SortByPipe } from './sortBy.pipe';

const basicPipes = [FilterParamsPipe, SortByPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [basicPipes],
  exports: [basicPipes],
})
export class PipesModule {}
