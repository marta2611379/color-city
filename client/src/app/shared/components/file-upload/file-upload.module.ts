import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule, MaterialModule, TranslateModule, ReactiveFormsModule, ],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
