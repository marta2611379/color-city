import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalTextComponent } from './modal-text.component';
import { MaterialModule } from '../../modules/material/material.module';
import { SvgModule } from '../../modules/svg/svg.module';

@NgModule({
  declarations: [ModalTextComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SvgModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ModalTextComponent],
})
export class ModalTextModule {}
