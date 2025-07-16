import { Component } from '@angular/core';
import {
  AccountInformation,
  BankAccount,
  CardHistory,
} from '../../core/interfaces/account.model';
import { AccountService } from '../../services/account';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CardRecordService } from '../card-request/card-record.service';

@Component({
  selector: 'app-initiate-cardrequest',
  imports: [CommonModule, FormsModule],
  templateUrl: './initiate-cardrequest.html',
  styleUrl: './initiate-cardrequest.scss',
})
export class InitiateCardrequest {
  accountInfo: AccountInformation | null = null;
  searchQuery: string = '';
  filteredCardHistory: CardHistory[] = [];
  isLoading: boolean = false;
  showCardRequestModal = false;
  selectedAccountType: string | null = null;
  cardType: string = '';
  deliveryBranch: string = '';
  reason: string = '';
  selectedCategory = '';
  selectedStock = '';
  selectedReason = '';
  panSerialNumber = '';
  currentStep = 1;
  showSuccess = false;

  // Instant Issuance form properties
  instantIssuance = {
    customerName: 'Anthony Omolara Ademorin',
    accountNumber: '1234567890',
    accountType: 'Corporate',
    cardType: '',
    cardScheme: '',
    changeOption: 'Change',
    reason: '',
    attachedDocument: null as File | null,
  };

  // Pre-personalized form properties
  prePersonalized = {
    customerName: 'Anthony Omolara Ademorin',
    accountNumber: '1234567890',
    accountType: 'Corporate',
    cardType: '',
    cardScheme: '',
    panOrSerial: '',
    changeOption: 'Change',
    reason: '',
    attachedDocument: null as File | null,
  };

  constructor(
    private accountService: AccountService,
    private location: Location,
    private router: Router,
    private cardRecordService: CardRecordService
  ) {}

  ngOnInit(): void {
    this.loadAccountInformation();
  }

  loadAccountInformation(): void {
    this.isLoading = true;
    this.accountService.getAccountInformation().subscribe({
      next: (data) => {
        this.accountInfo = data;
        this.filteredCardHistory = data.cardHistory;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading account information:', error);
        this.isLoading = false;
      },
    });
  }

  onSearchCardHistory(): void {
    if (!this.searchQuery.trim()) {
      this.filteredCardHistory = this.accountInfo?.cardHistory || [];
      return;
    }

    this.accountService.searchCardHistory(this.searchQuery).subscribe({
      next: (results) => {
        this.filteredCardHistory = results;
      },
    });
  }

  openCardRequestModal(): void {
    this.showCardRequestModal = true;
  }

  closeCardRequestModal(): void {
    this.showCardRequestModal = false;
  }

  onInitiateCardRequest(): void {
    this.accountService.initiateCardRequest().subscribe({
      next: (success) => {
        if (success) {
          alert('Card request initiated successfully!');
          this.closeCardRequestModal();
        }
      },
      error: (error) => {
        console.error('Error initiating card request:', error);
        alert('Failed to initiate card request. Please try again.');
      },
    });
  }

  selectAccount(account: BankAccount): void {
    if (!account) return;

    // Reset all accounts selection
    if (this.accountInfo) {
      this.accountInfo.accounts.forEach((acc) => (acc.selected = false));
    }
    // Select the clicked account
    account.selected = true;
  }

  selectAccountType(type: string): void {
    this.selectedAccountType = type;
  }

  getStatusClass(status: string): string {
    if (!status) return 'status-inactive';

    switch (status.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'inactive':
        return 'status-inactive';
      case 'pending':
        return 'status-pending';
      default:
        return 'status-inactive';
    }
  }

  getAccountsByType(
    type: 'Savings' | 'Current' | 'Dollar' | 'Trust Fund'
  ): BankAccount[] {
    return (
      this.accountInfo?.accounts.filter((account) => account.type === type) ||
      []
    );
  }
  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
  }

  onStockChange(event: any) {
    this.selectedStock = event.target.value;
  }

  onReasonChange(event: any) {
    this.selectedReason = event.target.value;
  }

  onSubmit() {
    // Move to next step (Instant Issuance)
    this.currentStep = 2;
  }

  onInstantIssuanceSubmit() {
    console.log('Instant Issuance submitted:', this.instantIssuance);
    alert('Card activation request submitted successfully!');
    const newRecord = {
      customerName: this.instantIssuance.customerName,
      accountNumber: this.instantIssuance.accountNumber,
      accountType: this.instantIssuance.accountType,
      dateOfIssuance: new Date().toLocaleDateString(),
      status: 'pending',
    };
    this.cardRecordService.addRecord(newRecord);
    this.showSuccess = true;
    this.closeCardRequestModal();
  }

  onPrePersonalizedSubmit() {
    console.log('Pre-personalized submitted:', this.prePersonalized);
    alert('Pre-personalized card activation request submitted successfully!');
    const newRecord = {
      customerName: this.prePersonalized.customerName,
      accountNumber: this.prePersonalized.accountNumber,
      accountType: this.prePersonalized.accountType,
      dateOfIssuance: new Date().toLocaleDateString(),
      status: 'pending',
    };
    this.cardRecordService.addRecord(newRecord);
    this.showSuccess = true;
    this.closeCardRequestModal();
  }

  goBackToStep1() {
    this.currentStep = 1;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Assign to both forms if their file input is visible
      if (document.getElementById('fileInput')) {
        this.instantIssuance.attachedDocument = file;
      }
      if (document.getElementById('preFileInput')) {
        this.prePersonalized.attachedDocument = file;
      }
    }
  }

  triggerFileUpload() {
    // Try both file inputs
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    const preFileInput = document.getElementById(
      'preFileInput'
    ) as HTMLInputElement;
    if (fileInput && fileInput.offsetParent !== null) {
      fileInput.click();
    } else if (preFileInput && preFileInput.offsetParent !== null) {
      preFileInput.click();
    }
  }

  goBack() {
    this.location.back();
  }

  goHome() {
    this.router.navigate(['/']); // or your home/dashboard route
  }

  get formTitle(): string {
    if (this.currentStep === 1) {
      return 'Initiate Card Request';
    }
    if (this.selectedCategory === 'instant-issuance') {
      return 'Instant Issuance Card Request';
    }
    if (this.selectedCategory === 'pre-personalized') {
      return 'Pre-personalized Card Request';
    }
    return 'Initiate Card Request';
  }
}
