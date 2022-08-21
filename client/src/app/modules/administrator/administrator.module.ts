import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { ComponentsComponent } from './components/components.component';
import { BrandComponent } from './pages/brand/brand.component';
import { ProductComponent } from './pages/product/product.component';
import { TranslateModule } from '@ngx-translate/core';
import { CategoryProductComponent } from './pages/category-product/category-product.component';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmptyDataModule } from 'src/app/shared/components/empty-data/empty-data.module';
import { ModalTextModule } from 'src/app/shared/components/modal-text/modal-text.module';
import { EditBrandComponent } from './pages/brand/components/edit-brand/edit-brand.component';
import { SubcategoryComponent } from './pages/category-product/components/subcategory/subcategory.component';
import { EditCategoryComponent } from './pages/category-product/components/edit-category/edit-category.component';
import { EditSubcategoryComponent } from './pages/category-product/components/edit-subcategory/edit-subcategory.component';
import { FileUploadModule } from 'src/app/shared/components/file-upload/file-upload.module';
import { FormArrayModule } from 'src/app/shared/components/form-array/form-array.module';
import { PipesModule } from 'src/app/shared/pipes/pipe.module';
import { MultipleMatSelectModule } from 'src/app/shared/components/multiple-mat-select/multiple-mat-select.module';
import { VolumePriceComponent } from './pages/product/components/volume-price/volume-price.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    BrandComponent,
    ProductComponent,
    CategoryProductComponent,
    EditBrandComponent,
    SubcategoryComponent,
    EditCategoryComponent,
    EditSubcategoryComponent,
    VolumePriceComponent,
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    TranslateModule,
    TableModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EmptyDataModule,
    ModalTextModule,
    FileUploadModule,
    FormArrayModule,
    PipesModule,
    MultipleMatSelectModule
  ],
})
export class AdministratorModule {}
