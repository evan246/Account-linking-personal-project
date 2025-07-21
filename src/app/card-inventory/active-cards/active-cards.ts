import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardRecord, FilterOptions } from '../../core/interfaces/cardrecord';
import { CardService } from '../../shared/services/card.service';
import { SharedModalComponent } from '../../shared/modal.component';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-active-cards',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModalComponent],
  templateUrl: './active-cards.html',
  styleUrl: './active-cards.scss',
})
export class ActiveCardsComponent implements OnInit {
  cardRecords: CardRecord[] = [];
  filteredRecords: CardRecord[] = [];
  selectedRecords = new Set<string>();
  searchTerm = '';

  filters: FilterOptions = {
    accountType: '',
    cardType: '',
    branch: '',
    dateIssued: '',
  };

  selectedAccountType = '';
  selectedCardType = '';
  selectedBranch = '';
  selectedDate = '';
  showDetailModal = false;
  selectedCard: CardRecord | null = null;

  constructor(
    private cardService: CardService,
    public modalService: ModalService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadCards();
  }

  async loadCards(): Promise<void> {
    try {
      const cards = (await this.cardService.getActiveCards().toPromise()) || [];
      this.cardRecords = cards;
      this.filteredRecords = [...cards];
    } catch (error) {
      this.cardRecords = [];
      this.filteredRecords = [];
    }
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
  getAccountTypeBadgeClass(accountType: string): string {
    switch (accountType.toLowerCase()) {
      case 'savings':
        return 'badge-savings';
      case 'current':
        return 'badge-current';
      case 'credit':
        return 'badge-credit';
      default:
        return 'badge-secondary';
    }
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

  viewRecord(record: CardRecord): void {
    this.selectedCard = record;
    this.showDetailModal = true;
  }

  editRecord(record: CardRecord): void {
    console.log('Edit record:', record);
  }

  blockRecord(record: CardRecord): void {
    console.log('Block record:', record);
  }
  getCardTypeBadgeClass(cardType: string): string {
    switch (cardType.toLowerCase()) {
      case 'debit':
        return 'badge-debit';
      case 'credit':
        return 'badge-credit-card';
      case 'prepaid':
        return 'badge-prepaid';
      default:
        return 'badge-secondary';
    }
  }

  exportSelected(): void {
    console.log('Export selected records');
  }

  blockSelected(): void {
    console.log('Block selected records');
  }

  deleteSelected(): void {
    console.log('Delete selected records');
  }

  onRowAction(record: CardRecord): void {
    this.viewRecord(record);
  }

  viewCardDetails(record: CardRecord): void {
    this.selectedCard = record;
    this.modalService.open();
  }

  closeModal(): void {
    this.modalService.close();
    this.selectedCard = null;
  }

  trackByFn(index: number, item: CardRecord): string {
    return item.id;
  }

  blockCardFromModal() {
    // Implement your block logic here, or just close the modal for now
    this.closeModal();
  }
}
