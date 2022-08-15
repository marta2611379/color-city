import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/components/main/main.component';
import { AdministratorModule } from './modules/administrator/administrator.module';
import { CatalogModule } from './modules/catalog/catalog.module';
import { ContactsModule } from './modules/contacts/contacts.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      {
        path: 'admin',
        loadChildren: () => AdministratorModule,
      },
      {
        path: 'contacts',
        loadChildren: () => ContactsModule,
      },

      {
        path: 'catalog',
        loadChildren: () => CatalogModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
