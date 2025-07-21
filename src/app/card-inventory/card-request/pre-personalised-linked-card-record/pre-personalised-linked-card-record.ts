import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardRecordService } from '../card-record.service';
import { CardRecord } from '../../../core/interfaces/cardrecord';

@Component({
  selector: 'app-pre-personalised-linked-card-record',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pre-personalised-linked-card-record.html',
  styleUrls: ['./pre-personalised-linked-card-record.scss'],
})
export class PrePersonalisedLinkedCardRecordComponent {
  searchTerm = '';
  selectedAccountType = '';
  selectedDate = '';
  selectedRecords = new Set<string>();
  filteredRows: CardRecord[] = [];
  allRecords: CardRecord[] = [];

  constructor(private cardRecordService: CardRecordService) {}

  ngOnInit(): void {
    const raw = this.cardRecordService.getPrePersonalisedRecords();
    this.allRecords = Array.isArray(raw)
      ? raw.map((r: any, idx: number) => ({
          id: r.id || String(idx + 1),
          customerName: r.customerName || '',
          accountNumber: r.accountNumber || '',
          accountType: r.accountType || '',
          dateIssued: r.dateIssued
            ? new Date(r.dateIssued)
            : r.dateOfIssuance
            ? new Date(r.dateOfIssuance)
            : new Date(0),
          status: r.status || '',
          cardNumber: r.cardNumber || '',
          cardType: r.cardType || '',
          issuedDate: r.issuedDate ? new Date(r.issuedDate) : new Date(0),
          expiryDate: r.expiryDate ? new Date(r.expiryDate) : new Date(0),
          customerEmail: r.customerEmail || '',
          lastActivity: r.lastActivity ? new Date(r.lastActivity) : new Date(0),
          branch: r.branch || '',
        }))
      : [];
    this.filteredRows = [...this.allRecords];
  }

  onSearch(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  onExport(): void {
    const rows = this.filteredRows;
    const csv = [
      'Customer Name,Account Number,Account Type,Date of Issuance,Status',
      ...rows.map(
        (r) =>
          `${r.customerName},${r.accountNumber},${
            r.accountType
          },${this.formatDateForDisplay(r.dateIssued)},${r.status}`
      ),
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pre-personalised-linked-card-record.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  selectAll(event: any): void {
    if (event.target.checked) {
      this.filteredRows.forEach((record) =>
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

  trackByFn(index: number, item: CardRecord): string {
    return item.id;
  }

  formatDateForDisplay(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  private applyFilters(): void {
    this.filteredRows = this.allRecords.filter((record) => {
      const matchesSearch =
        !this.searchTerm ||
        record.customerName
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        record.accountNumber?.includes(this.searchTerm);

      const matchesAccountType =
        !this.selectedAccountType ||
        record.accountType === this.selectedAccountType;

      const matchesDate =
        !this.selectedDate ||
        this.formatDateForComparison(record.dateIssued) === this.selectedDate;

      return matchesSearch && matchesAccountType && matchesDate;
    });
  }

  private formatDateForComparison(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
