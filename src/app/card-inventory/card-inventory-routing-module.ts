import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInventoryComponent } from './card-inventory';
import { Account } from './card-request/account';

const routes: Routes = [
  { path: '', component: CardInventoryComponent },

  {
    path: 'card-request',
    loadChildren: () =>
      import('./card-request/card-request-module').then(
        (m) => m.CardRequestModule
      ),
  },
  {
    path: 'card-activation',
    loadComponent: () =>
      import('./card-activation/card-activation').then(
        (m) => m.CardActivationComponent
      ),
  },
  {
    path: 'total-cards',
    loadComponent: () =>
      import('./total-cards/total-cards').then((m) => m.TotalCardsComponent),
  },
  {
    path: 'available-cards',
    loadComponent: () =>
      import('./available-cards/available-cards').then(
        (m) => m.AvailableCardsComponent
      ),
  },
  {
    path: 'issued-cards',
    loadComponent: () =>
      import('./issued-cards/issued-cards').then((m) => m.IssuedCardsComponent),
  },
  {
    path: 'active-cards',
    loadComponent: () =>
      import('./active-cards/active-cards').then((m) => m.ActiveCardsComponent),
  },
  {
    path: 'blocked-cards',
    loadComponent: () =>
      import('./blocked-cards/blocked-cards').then(
        (m) => m.BlockedCardsComponent
      ),
  },
  {
    path: 'hop-cards',
    loadComponent: () =>
      import('./hop-cards/hop-cards').then((m) => m.HopCardsComponent),
  },
  {
    path: 'expiry-cards',
    loadComponent: () =>
      import('./expiry-cards/expiry-cards').then((m) => m.ExpiryCardsComponent),
  },
  {
    path: 'initiate-cardrequest',
    loadComponent: () =>
      import('./initiate-cardrequest/initiate-cardrequest').then(
        (m) => m.InitiateCardrequest
      ),
  },
  {
    path: 'reporting-audit',
    loadComponent: () =>
      import('./reporting-audit/reporting-audit').then((m) => m.ReportingAudit),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardInventoryRoutingModule {}
