import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { ComponentsComponent } from './components/components.component';
import { GoodsComponent } from './pages/goods/goods.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/shared/pipes/pipe.module';
import { GoodCardComponent } from './pages/good-card/good-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComponentsComponent, GoodsComponent, GoodCardComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MaterialModule,
    TranslateModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class CatalogModule {}
