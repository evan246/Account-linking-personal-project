import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardMetric, FilterOption } from '../core/cardmetric';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-inventory',
  imports: [CommonModule, FormsModule],
  templateUrl: './card-inventory.html',
  styleUrls: ['./card-inventory.scss'],
})
export class CardInventoryComponent implements OnInit {
  selectedBranch = '';
  selectedCardType = '';
  selectedDate = '';

  branchOptions: FilterOption[] = [
    { label: 'All Branches', value: 'all' },
    { label: 'Omole Branch-Lagos', value: 'omole' },
    { label: 'Victoria Island Branch', value: 'vi' },
    { label: 'Ikeja Branch', value: 'ikeja' },
  ];

  cardTypeOptions: FilterOption[] = [
    { label: 'All Card Types', value: 'all' },
    { label: 'Debit Card', value: 'debit' },
    { label: 'Credit Card', value: 'credit' },
    { label: 'Prepaid Card', value: 'prepaid' },
  ];

  cardMetrics: CardMetric[] = [
    {
      title: 'Total Card Allocated',
      value: 12,
      icon: 'credit-card',
      colorClass: 'text-white',
      bgClass: 'bg-primary-light',
      isPrimary: true,
      route: '/card-inventory/total-cards',
    },
    {
      title: 'Available',
      value: 23,
      icon: 'check-circle',
      colorClass: 'text-success',
      bgClass: 'bg-success-light',
      route: '/card-inventory/available-cards',
    },
    {
      title: 'Issued',
      value: 20,
      icon: 'file-text',
      colorClass: 'text-warning',
      bgClass: 'bg-warning-light',
      route: '/card-inventory/issued-cards',
    },
    {
      title: 'Active',
      value: 40,
      icon: 'play-circle',
      colorClass: 'text-info',
      bgClass: 'bg-info-light',
      route: '/card-inventory/active-cards',
    },
    {
      title: 'Blocked',
      value: 20,
      icon: 'stop-circle',
      colorClass: 'text-danger',
      bgClass: 'bg-danger-light',
      route: '/card-inventory/blocked-cards',
    },
    {
      title: 'Request Placed to HOP',
      value: 10,
      icon: 'send',
      colorClass: 'text-purple',
      bgClass: 'bg-purple-light',
      route: '/card-inventory/hop-cards',
    },
    {
      title: 'Near Expiry (60days)',
      value: 25,
      icon: 'clock',
      colorClass: 'text-warning',
      bgClass: 'bg-warning-light',
      route: '/card-inventory/expiry-cards',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(): void {
    console.log('Search clicked', {
      branch: this.selectedBranch,
      cardType: this.selectedCardType,
      date: this.selectedDate,
    });
  }

  onExport(): void {
    console.log('Export clicked');
  }

  onCardClick(metric: CardMetric): void {
    console.log('Card clicked:', metric.title);
    this.router.navigate([metric.route]);
  }
}
