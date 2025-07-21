import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardRecord, FilterOptions } from '../../core/interfaces/cardrecord';
import { CardService } from '../../shared/services/card.service';
import { ModalService } from '../../shared/modal.service';
import { SharedModalComponent } from '../../shared/modal.component';

@Component({
  selector: 'app-blocked-cards',
  imports: [CommonModule, FormsModule, SharedModalComponent],
  templateUrl: './blocked-cards.html',
  styleUrl: './blocked-cards.scss',
})
export class BlockedCardsComponent implements OnInit {
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

  selectedCard: CardRecord | null = null;
  isModalVisible = false;

  constructor(
    private cardService: CardService,
    public modalService: ModalService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadCards();
  }

  async loadCards(): Promise<void> {
    try {
      const cards =
        (await this.cardService.getBlockedCards().toPromise()) || [];
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

  onRowAction(record: CardRecord): void {
    console.log('Action clicked for:', record);
  }

  onExport() {
    // TODO: Implement export logic
    console.log('Export clicked');
  }

  trackByFn(index: number, item: CardRecord): string {
    return item.id;
  }

  viewCardDetails(record: CardRecord): void {
    this.selectedCard = record;
    this.modalService.open();
  }

  closeModal(): void {
    this.modalService.close();
    this.selectedCard = null;
  }

  blockCardFromModal() {
    this.closeModal();
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(new Date(date));
  }
}
