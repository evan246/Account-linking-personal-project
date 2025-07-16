import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  AccountInformation,
  CardHistory,
} from '../core/interfaces/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private mockData: AccountInformation = {
    personalInfo: {
      fullName: 'Olaleseyi Aderonke Rosaline',
      dateOfBirth: '30th, December 1972',
      gender: 'Male',
      profileImage:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    },
    accounts: [
      {
        type: 'Savings',
        title: 'Savings account',
        accountNumber: '1234567890',
        accountOpening: '30th, Dec 1972',
        accountStatus: 'Active',
      },
      {
        type: 'Current',
        title: 'Current account',
        accountNumber: '1234567890',
        accountOpening: '30th, Dec 1972',
        accountStatus: 'Inactive',
      },
      {
        type: 'Dollar',
        title: 'Dollar account',
        accountNumber: '1234567890',
        accountOpening: '30th, Dec 1972',
        accountStatus: 'Active',
      },
      {
        type: 'Trust Fund',
        title: 'Trust Fund account',
        accountNumber: '1234567890',
        accountOpening: '30th, Dec 1972',
        accountStatus: 'Active',
      },
    ],
    cardHistory: [
      {
        cardNumber: '****-****-****-1234',
        cardType: 'Visa Debit',
        dateIssued: '15th Jan 2023',
        expiryDate: '15th Jan 2026',
      },
      {
        cardNumber: '****-****-****-5678',
        cardType: 'Mastercard Credit',
        dateIssued: '20th Mar 2023',
        expiryDate: '20th Mar 2026',
      },
      {
        cardNumber: '****-****-****-9012',
        cardType: 'Visa Credit',
        dateIssued: '10th Jun 2023',
        expiryDate: '10th Jun 2026',
      },
    ],
  };

  getAccountInformation(): Observable<AccountInformation> {
    return of(this.mockData);
  }

  initiateCardRequest(): Observable<boolean> {
    return of(true);
  }

  searchCardHistory(query: string): Observable<CardHistory[]> {
    const filtered = this.mockData.cardHistory.filter(
      (card: { cardNumber: string; cardType: string }) =>
        card.cardNumber.toLowerCase().includes(query.toLowerCase()) ||
        card.cardType.toLowerCase().includes(query.toLowerCase())
    );
    return of(filtered);
  }
}
