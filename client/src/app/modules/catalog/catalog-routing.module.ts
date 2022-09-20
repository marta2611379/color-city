import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { GoodInfoComponent } from './pages/good-info/good-info.component';
import { GoodsComponent } from './pages/goods/goods.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: GoodsComponent },
      { path: 'product/:productId', component: GoodInfoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
