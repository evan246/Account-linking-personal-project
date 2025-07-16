import { Routes } from '@angular/router';
import { CustomerServiceModule } from './customer-service/customer-service-module';
import { LayoutMain } from './layout/layout-main/layout-main';

export const routes: Routes = [
  {
    path: '',
    component: LayoutMain,
    children: [
      {
        path: 'customer-service',
        loadChildren: () =>
          import('./customer-service/customer-service-module').then(
            (m) => m.CustomerServiceModule
          ),
      },
      {
        path: 'card-inventory',
        loadChildren: () =>
          import('./card-inventory/card-inventory.module').then(
            (m) => m.CardInventoryModule
          ),
      },

      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
