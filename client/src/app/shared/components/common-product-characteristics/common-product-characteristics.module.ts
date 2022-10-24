import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonProductCharacteristicsComponent } from './common-product-characteristics.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../modules/material/material.module';
import { PipesModule } from '../../pipes/pipe.module';

@NgModule({
  declarations: [CommonProductCharacteristicsComponent],
  imports: [CommonModule, TranslateModule, MaterialModule, PipesModule],
  exports: [CommonProductCharacteristicsComponent],
})
export class CommonProductCharacteristicsModule {}
