import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInventoryComponent } from './card-inventory';
import { CardInventoryRoutingModule } from './card-inventory-routing-module';

@NgModule({
  imports: [CommonModule, CardInventoryRoutingModule, CardInventoryComponent],
})
export class CardInventoryModule {}
