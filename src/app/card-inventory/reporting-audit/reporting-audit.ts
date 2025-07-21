import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardRecord } from '../../core/interfaces/cardrecord';

interface AuditTableRecord extends Omit<CardRecord, 'dateIssued'> {
  dateIssued: string;
}

@Component({
  selector: 'app-reporting-audit',
  imports: [CommonModule, FormsModule],
  templateUrl: './reporting-audit.html',
  styleUrl: './reporting-audit.scss',
})
export class ReportingAudit implements OnInit {
  @ViewChild('recordDetailsModal') recordDetailsModal!: ElementRef;

  auditRecords: AuditTableRecord[] = [
    {
      id: '1',
      cardNumber: '1234-5678-2534',
      status: 'Active',
      issuedDate: new Date('2015-08-18'),
      expiryDate: new Date('2025-08-18'),
      customerName: 'Adeniyi Omolara',
      customerEmail: 'adeniyi@example.com',
      lastActivity: new Date(),
      accountType: 'Savings',
      cardSerialNumber: '****2534',
      dateIssued: '18-08-2015',
      cardType: 'Debit',
      branch: 'Alimosho',
    },
    {
      id: '2',
      cardNumber: '1234-5678-2534',
      status: 'Active',
      issuedDate: new Date('2015-08-18'),
      expiryDate: new Date('2025-08-18'),
      customerName: 'Adeniyi Omolara',
      customerEmail: 'adeniyi@example.com',
      lastActivity: new Date(),
      accountType: 'Savings',
      cardSerialNumber: '****2534',
      dateIssued: '18-08-2015',
      cardType: 'Debit',
      branch: 'Alimosho',
    },
    {
      id: '3',
      cardNumber: '1234-5678-2534',
      status: 'Active',
      issuedDate: new Date('2015-08-18'),
      expiryDate: new Date('2025-08-18'),
      customerName: 'Adeniyi Omolara',
      customerEmail: 'adeniyi@example.com',
      lastActivity: new Date(),
      accountType: 'Savings',
      cardSerialNumber: '****2534',
      dateIssued: '18-08-2015',
      cardType: 'Debit',
      branch: 'Alimosho',
    },
    {
      id: '4',
      cardNumber: '1234-5678-2534',
      status: 'Active',
      issuedDate: new Date('2015-08-18'),
      expiryDate: new Date('2025-08-18'),
      customerName: 'Adeniyi Omolara',
      customerEmail: 'adeniyi@example.com',
      lastActivity: new Date(),
      accountType: 'Savings',
      cardSerialNumber: '****2534',
      dateIssued: '18-08-2015',
      cardType: 'Debit',
      branch: 'Alimosho',
    },
    {
      id: '5',
      cardNumber: '1234-5678-2534',
      status: 'Active',
      issuedDate: new Date('2015-08-18'),
      expiryDate: new Date('2025-08-18'),
      customerName: 'Adeniyi Omolara',
      customerEmail: 'adeniyi@example.com',
      lastActivity: new Date(),
      accountType: 'Savings',
      cardSerialNumber: '****2534',
      dateIssued: '18-08-2015',
      cardType: 'Debit',
      branch: 'Alimosho',
    },
    {
      id: '6',
      cardNumber: '1234-5678-2534',
      status: 'Active',
      issuedDate: new Date('2015-08-18'),
      expiryDate: new Date('2025-08-18'),
      customerName: 'Adeniyi Omolara',
      customerEmail: 'adeniyi@example.com',
      lastActivity: new Date(),
      accountType: 'Savings',
      cardSerialNumber: '****2534',
      dateIssued: '18-08-2015',
      cardType: 'Debit',
      branch: 'Alimosho',
    },
    {
      id: '7',
      cardNumber: '1234-5678-2534',
      status: 'Active',
      issuedDate: new Date('2015-08-18'),
      expiryDate: new Date('2025-08-18'),
      customerName: 'Adeniyi Omolara',
      customerEmail: 'adeniyi@example.com',
      lastActivity: new Date(),
      accountType: 'Savings',
      cardSerialNumber: '****2534',
      dateIssued: '18-08-2015',
      cardType: 'Debit',
      branch: 'Alimosho',
    },
    {
      id: '8',
      cardNumber: '1234-5678-2534',
      status: 'Active',
      issuedDate: new Date('2015-08-18'),
      expiryDate: new Date('2025-08-18'),
      customerName: 'Adeniyi Omolara',
      customerEmail: 'adeniyi@example.com',
      lastActivity: new Date(),
      accountType: 'Savings',
      cardSerialNumber: '****2534',
      dateIssued: '18-08-2015',
      cardType: 'Debit',
      branch: 'Alimosho',
    },
    {
      id: '9',
      cardNumber: '1234-5678-2534',
      status: 'Active',
      issuedDate: new Date('2015-08-18'),
      expiryDate: new Date('2025-08-18'),
      customerName: 'Adeniyi Omolara',
      customerEmail: 'adeniyi@example.com',
      lastActivity: new Date(),
      accountType: 'Savings',
      cardSerialNumber: '****2534',
      dateIssued: '18-08-2015',
      cardType: 'Debit',
      branch: 'Alimosho',
    },
    {
      id: '10',
      cardNumber: '1234-5678-2534',
      status: 'Active',
      issuedDate: new Date('2015-08-18'),
      expiryDate: new Date('2025-08-18'),
      customerName: 'Adeniyi Omolara',
      customerEmail: 'adeniyi@example.com',
      lastActivity: new Date(),
      accountType: 'Savings',
      cardSerialNumber: '****2534',
      dateIssued: '18-08-2015',
      cardType: 'Debit',
      branch: 'Alimosho',
    },
    {
      id: '11',
      cardNumber: '1234-5678-2534',
      status: 'Active',
      issuedDate: new Date('2015-08-18'),
      expiryDate: new Date('2025-08-18'),
      customerName: 'Adeniyi Omolara',
      customerEmail: 'adeniyi@example.com',
      lastActivity: new Date(),
      accountType: 'Savings',
      cardSerialNumber: '****2534',
      dateIssued: '18-08-2015',
      cardType: 'Debit',
      branch: 'Alimosho',
    },
  ];
  filteredRecords: AuditTableRecord[] = [];
  selectedRecords = new Set<string>();
  selectedRecord: AuditTableRecord | null = null;
  searchTerm = '';
  isModalVisible = false;

  filters = {
    accountType: '',
    cardType: '',
    branch: '',
    dateIssued: '',
  };

  accountTypes = ['Savings', 'Current', 'Fixed'];
  cardTypes = ['Debit', 'Credit', 'Prepaid', 'HOP'];
  branches = ['Alimosho', 'Victoria Island', 'Ikeja'];

  ngOnInit(): void {
    this.filteredRecords = [...this.auditRecords];
  }

  onSearch(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    this.filteredRecords = this.auditRecords.filter((record) => {
      const matchesSearch =
        !this.searchTerm ||
        (record.cardSerialNumber || '')
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
        record.dateIssued === this.filters.dateIssued;

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

  viewRecordDetails(record: AuditTableRecord): void {
    this.selectedRecord = record;
    this.isModalVisible = true;
    document.body.classList.add('modal-open');
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.selectedRecord = null;
    document.body.classList.remove('modal-open');
  }

  trackByFn(index: number, item: AuditTableRecord): string {
    return item.id;
  }
}
