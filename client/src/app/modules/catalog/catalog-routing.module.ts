import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      // { path: '', redirectTo: 'goods', pathMatch: 'full' },
      // { path: 'goods', component: GoodsComponent },
      //   { path: 'product', component: ProductComponent },
      //   { path: 'category', component: CategoryProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
