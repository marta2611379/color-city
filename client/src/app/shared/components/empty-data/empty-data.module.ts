import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { EmptyDataComponent } from './empty-data.component';

@NgModule({
  declarations: [EmptyDataComponent],
  imports: [CommonModule, TranslateModule],
  exports: [EmptyDataComponent],
})
export class EmptyDataModule {}
