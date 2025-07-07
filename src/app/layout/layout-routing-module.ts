import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMain } from './layout-main/layout-main';

const routes: Routes = [
  {
    path: '',
    component: LayoutMain,
    children: [
      // {
      //   path: 'dashboard',
      //   loadChildren: () =>
      //     import('../dashboard/dashboard.module').then(
      //       (m) => m.DashboardModule
      //     ),
      // },
      // {
      //   path: 'users',
      //   loadChildren: () =>
      //     import('../users/users.module').then((m) => m.UsersModule),
      // },
      // {
      //   path: 'products',
      //   loadChildren: () =>
      //     import('../products/products.module').then((m) => m.ProductsModule),
      // },
      // {
      //   path: 'analytics',
      //   loadChildren: () =>
      //     import('../analytics/analytics.module').then(
      //       (m) => m.AnalyticsModule
      //     ),
      // },
      // {
      //   path: 'settings',
      //   loadChildren: () =>
      //     import('../settings/settings.module').then((m) => m.SettingsModule),
      // },
      // {
      //   path: 'reports',
      //   loadChildren: () =>
      //     import('../reports/reports.module').then((m) => m.ReportsModule),
      // },
      // {
      //   path: '',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
