import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArrayComponent } from './form-array.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';

@NgModule({
  declarations: [FormArrayComponent],
  imports: [CommonModule, MaterialModule, TranslateModule, ReactiveFormsModule],
  exports: [FormArrayComponent],
})
export class FormArrayModule {}
