import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardRecord, FilterOptions } from '../../core/interfaces/cardrecord';
import { CardService } from '../../shared/services/card.service';

@Component({
  selector: 'app-expiry-cards',
  imports: [CommonModule, FormsModule],
  templateUrl: './expiry-cards.html',
  styleUrl: './expiry-cards.scss',
})
export class ExpiryCardsComponent implements OnInit {
  cardRecords: CardRecord[] = [];
  filteredRecords: CardRecord[] = [];
  selectedRecords = new Set<string>();
  searchTerm = '';

  // Add missing properties for template binding
  selectedAccountType = '';
  selectedCardType = '';
  selectedBranch = '';
  selectedDate = '';

  // Add missing options arrays
  accountTypeOptions = [
    { label: 'All Account Types', value: '' },
    { label: 'Savings', value: 'savings' },
    { label: 'Current', value: 'current' },
    { label: 'Fixed Deposit', value: 'fixed' },
  ];

  cardTypeOptions = [
    { label: 'All Card Types', value: '' },
    { label: 'Debit', value: 'debit' },
    { label: 'Credit', value: 'credit' },
    { label: 'Prepaid', value: 'prepaid' },
  ];

  branchOptions = [
    { label: 'All Branches', value: '' },
    { label: 'Alimosho', value: 'alimosho' },
    { label: 'Victoria Island', value: 'vi' },
    { label: 'Ikeja', value: 'ikeja' },
  ];

  filters: FilterOptions = {
    accountType: '',
    cardType: '',
    branch: '',
    dateIssued: '',
  };

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cardService.getExpiryCards().subscribe((cards) => {
      this.cardRecords = cards;
      this.filteredRecords = [...cards];
    });
  }

  onSearch(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    this.filteredRecords = this.cardRecords.filter((record) => {
      const matchesSearch =
        !this.searchTerm ||
        record.cardNumber
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        record.customerName
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());

      const matchesAccountType =
        !this.filters.accountType ||
        record.accountType === this.filters.accountType;

      const matchesCardType =
        !this.filters.cardType || record.cardType === this.filters.cardType;

      const matchesBranch =
        !this.filters.branch || record.branch === this.filters.branch;

      const matchesDate =
        !this.filters.dateIssued ||
        record.issuedDate.toISOString().split('T')[0] ===
          this.filters.dateIssued;

      return (
        matchesSearch &&
        matchesAccountType &&
        matchesCardType &&
        matchesBranch &&
        matchesDate
      );
    });
  }

  selectAll(event: any): void {
    if (event.target.checked) {
      this.filteredRecords.forEach((record) =>
        this.selectedRecords.add(record.id)
      );
    } else {
      this.selectedRecords.clear();
    }
  }

  toggleSelection(recordId: string, event: any): void {
    if (event.target.checked) {
      this.selectedRecords.add(recordId);
    } else {
      this.selectedRecords.delete(recordId);
    }
  }

  onExport(): void {
    console.log('Export clicked');
  }

  toggleSelectAll(event: any): void {
    const checked = event.target.checked;
    this.cardRecords.forEach((record) => (record.selected = checked));
  }

  onRowSelect(record: CardRecord): void {
    record.selected = !record.selected;
  }

  onRowAction(record: CardRecord): void {
    console.log('Action clicked for:', record);
  }

  trackByFn(index: number, item: CardRecord): string {
    return item.id;
  }
}
