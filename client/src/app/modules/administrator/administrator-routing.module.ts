import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CategoryProductComponent } from './pages/category-product/category-product.component';
import { CreateGoodComponent } from './pages/product/components/create-good/create-good.component';
import { EditGoodComponent } from './pages/product/components/edit-good/edit-good.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'brand', pathMatch: 'full' },
      { path: 'brand', component: BrandComponent },
      {
        path: 'product',
        component: ProductComponent,
        children: [
          { path: '', redirectTo: 'create', pathMatch: 'full' },
          { path: 'create', component: CreateGoodComponent },
          { path: 'edit', component: EditGoodComponent },
        ],
      },
      { path: 'category', component: CategoryProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorRoutingModule {}
