import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardService } from '../../shared/services/card.service';
import { CardRecord } from '../../core/interfaces/cardrecord';

@Component({
  selector: 'app-customer-service',
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-service.html',
  styleUrl: './customer-service.scss',
})
export class CustomerService implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
