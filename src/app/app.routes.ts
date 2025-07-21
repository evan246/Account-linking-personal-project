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
        path: 'card-request',
        loadChildren: () =>
          import('./card-inventory/card-request/card-request-module').then(
            (m) => m.CardRequestModule
          ),
      },
      {
        path: 'pre-personalised-linked-card-record',
        loadComponent: () =>
          import(
            './card-inventory/card-request/pre-personalised-linked-card-record/pre-personalised-linked-card-record'
          ).then((m) => m.PrePersonalisedLinkedCardRecordComponent),
      },

      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
