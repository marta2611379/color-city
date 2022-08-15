import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { ComponentsComponent } from './components/components.component';
import { BrandComponent } from './pages/brand/brand.component';
import { ProductComponent } from './pages/product/product.component';
import { TranslateModule } from '@ngx-translate/core';
import { CategoryProductComponent } from './pages/category-product/category-product.component';

@NgModule({
  declarations: [ComponentsComponent, BrandComponent, ProductComponent, CategoryProductComponent],
  imports: [CommonModule, AdministratorRoutingModule, TranslateModule],
})
export class AdministratorModule {}
