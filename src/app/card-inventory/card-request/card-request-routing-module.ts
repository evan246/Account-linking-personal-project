import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardRequest } from './card-request';
import { Account } from './account';
import { InstantCardIssuanceRecordComponent } from './instant-card-issuance-record/instant-card-issuance-record';
import { PrePersonalisedLinkedCardRecordComponent } from './pre-personalised-linked-card-record/pre-personalised-linked-card-record';

const routes: Routes = [
  { path: '', component: CardRequest },
  { path: 'account', component: Account },
  {
    path: 'instant-card-issuance-record',
    loadComponent: () =>
      import(
        './instant-card-issuance-record/instant-card-issuance-record'
      ).then((m) => m.InstantCardIssuanceRecordComponent),
  },
  {
    path: 'pre-personalised-linked-card-record',
    loadComponent: () =>
      import(
        './pre-personalised-linked-card-record/pre-personalised-linked-card-record'
      ).then((m) => m.PrePersonalisedLinkedCardRecordComponent),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRequestRoutingModule {}
