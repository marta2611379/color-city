import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CategoryProductComponent } from './pages/category-product/category-product.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'brand', pathMatch: 'full' },
      { path: 'brand', component: BrandComponent },
      { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoryProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorRoutingModule {}
