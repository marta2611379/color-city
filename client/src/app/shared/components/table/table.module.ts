import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../modules/material/material.module';
import { EmptyDataModule } from '../empty-data/empty-data.module';
import { PipesModule } from '../../pipes/pipe.module';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MaterialModule, TranslateModule, EmptyDataModule, PipesModule],
  exports: [TableComponent],
})
export class TableModule {}
