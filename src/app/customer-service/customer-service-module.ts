import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from './customer-service/customer-service';

import { CustomerServiceRoutingModule } from './customer-service-routing-module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CustomerServiceRoutingModule],
})
export class CustomerServiceModule {}
