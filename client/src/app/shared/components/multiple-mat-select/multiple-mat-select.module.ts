import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleMatSelectComponent } from './multiple-mat-select.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';

@NgModule({
  declarations: [MultipleMatSelectComponent],
  imports: [CommonModule, MaterialModule, TranslateModule, ReactiveFormsModule],
  exports: [MultipleMatSelectComponent],
})
export class MultipleMatSelectModule {}
