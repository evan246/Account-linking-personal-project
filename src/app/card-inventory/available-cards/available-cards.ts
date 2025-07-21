import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardRecord, FilterOptions } from '../../core/interfaces/cardrecord';
import { CardService } from '../../shared/services/card.service';
import { SharedModalComponent } from '../../shared/modal.component';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-available-cards',
  imports: [CommonModule, FormsModule, RouterModule, SharedModalComponent],
  templateUrl: './available-cards.html',
  styleUrl: './available-cards.scss',
})
export class AvailableCardsComponent implements OnInit {
  @ViewChild('cardDetailsModal') cardDetailsModal!: ElementRef;

  cardRecords: CardRecord[] = [];
  filteredRecords: CardRecord[] = [];
  selectedRecords = new Set<string>();
  selectedCard: CardRecord | null = null;
  searchTerm = '';
  isModalVisible = false;

  filters: FilterOptions = {
    accountType: '',
    cardType: '',
    branch: '',
    dateIssued: '',
  };

  constructor(
    private cardService: CardService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loadCards();
  }

  async loadCards(): Promise<void> {
    try {
      const cards = await this.cardService.getAllCards();
      console.log('Cards loaded:', cards.length, cards);

      this.cardRecords = cards;
      this.filteredRecords = [...cards];
    } catch (error) {
      console.error('Error loading cards:', error);
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
        this.formatDateForComparison(record.issuedDate) ===
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

  isAllSelected(): boolean {
    return (
      this.filteredRecords.length > 0 &&
      this.selectedRecords.size === this.filteredRecords.length
    );
  }

  isSomeSelected(): boolean {
    return (
      this.selectedRecords.size > 0 &&
      this.selectedRecords.size < this.filteredRecords.length
    );
  }

  viewCardDetails(record: CardRecord): void {
    this.selectedCard = record;
    this.modalService.open();
  }

  closeModal(): void {
    this.modalService.close();
    this.selectedCard = null;
  }

  blockCardFromModal(): void {
    if (this.selectedCard) {
      this.blockCard(this.selectedCard);
      this.closeModal();
    }
  }

  private closeDropdowns(): void {
    // Close any open Bootstrap dropdowns
    const dropdowns = document.querySelectorAll('.dropdown-menu.show');
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove('show');
    });
  }

  editCard(record: CardRecord): void {
    console.log('Edit card:', record);
    // Implement edit functionality
  }

  async blockCard(record: CardRecord): Promise<void> {
    try {
      const success = await this.cardService.blockCard(record.id);
      if (success) {
        console.log('Card blocked successfully:', record);
        // Update local record
        record.status = 'Blocked';
        this.applyFilters(); // Refresh the view
      } else {
        console.error('Failed to block card:', record);
      }
    } catch (error) {
      console.error('Error blocking card:', error);
    }
  }

  getCardTypeBadgeClass(cardType: string): string {
    const baseClass = 'badge';
    switch (cardType.toLowerCase()) {
      case 'debit':
        return `${baseClass} badge-debit`;
      case 'credit':
        return `${baseClass} badge-credit`;
      case 'prepaid':
        return `${baseClass} badge-prepaid`;
      case 'hop':
        return `${baseClass} badge-hop`;
      default:
        return `${baseClass} bg-secondary`;
    }
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(new Date(date));
  }

  formatDateForComparison(date: Date): string {
    return new Date(date).toISOString().split('T')[0];
  }

  trackByFn(index: number, item: CardRecord): string {
    return item.id;
  }
}
