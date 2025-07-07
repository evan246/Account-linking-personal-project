import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-service',
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-service.html',
  styleUrl: './customer-service.scss',
})
export class CustomerService {}
