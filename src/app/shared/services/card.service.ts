import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardRecord } from '../../core/interfaces/cardrecord';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private mockData: CardRecord[] = [
    {
      id: '1',
      cardNumber: '****2534',
      cardType: 'Debit',
      status: 'Active',
      issuedDate: new Date('2015-08-18'),
      expiryDate: new Date('2025-08-18'),
      customerName: 'Adeniyi Omolara',
      customerEmail: 'adeniyi@example.com',
      lastActivity: new Date('2024-01-15'),
      accountType: 'Savings',
      branch: 'Alimosho',
      cardSerialNumber: '',
      selected: undefined,
      dateIssued: undefined,
    },
    {
      id: '2',
      cardNumber: '****2535',
      cardType: 'Credit',
      status: 'Active',
      issuedDate: new Date('2020-03-15'),
      expiryDate: new Date('2025-03-15'),
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      lastActivity: new Date('2024-01-20'),
      accountType: 'Current',
      branch: 'Victoria Island',
      cardSerialNumber: '',
      selected: undefined,
      dateIssued: undefined,
    },
    {
      id: '3',
      cardNumber: '****2536',
      cardType: 'HOP',
      status: 'Active',
      issuedDate: new Date('2023-06-10'),
      expiryDate: new Date('2025-06-10'),
      customerName: 'Jane Smith',
      customerEmail: 'jane@example.com',
      lastActivity: new Date('2024-01-18'),
      accountType: 'Fixed',
      branch: 'Ikeja',
      cardSerialNumber: '',
      selected: undefined,
      dateIssued: undefined,
    },
    {
      id: '4',
      cardNumber: '****2537',
      cardType: 'Debit',
      status: 'Blocked',
      issuedDate: new Date('2018-12-05'),
      expiryDate: new Date('2025-12-05'),
      customerName: 'Mike Johnson',
      customerEmail: 'mike@example.com',
      lastActivity: new Date('2024-01-10'),
      accountType: 'Savings',
      branch: 'Alimosho',
      cardSerialNumber: '',
      selected: undefined,
      dateIssued: undefined,
    },
    {
      id: '5',
      cardNumber: '****2538',
      cardType: 'Prepaid',
      status: 'Available',
      issuedDate: new Date('2024-01-01'),
      expiryDate: new Date('2025-01-01'),
      customerName: 'Sarah Wilson',
      customerEmail: 'sarah@example.com',
      lastActivity: new Date('2024-01-25'),
      accountType: 'Current',
      branch: 'Victoria Island',
      cardSerialNumber: '',
      selected: undefined,
      dateIssued: undefined,
    },
    {
      id: '6',
      cardNumber: '****2539',
      cardType: 'Debit',
      status: 'Active',
      issuedDate: new Date('2022-09-20'),
      expiryDate: new Date('2024-02-20'), // Expiring soon
      customerName: 'David Brown',
      customerEmail: 'david@example.com',
      lastActivity: new Date('2024-01-22'),
      accountType: 'Savings',
      branch: 'Ikeja',
      cardSerialNumber: '',
      selected: undefined,
      dateIssued: undefined,
    },
    {
      id: '7',
      cardNumber: '****2540',
      cardType: 'HOP',
      status: 'Available',
      issuedDate: new Date('2024-01-15'),
      expiryDate: new Date('2025-01-15'),
      customerName: 'Lisa Davis',
      customerEmail: 'lisa@example.com',
      lastActivity: new Date('2024-01-24'),
      accountType: 'Fixed',
      branch: 'Alimosho',
      cardSerialNumber: '',
      selected: undefined,
      dateIssued: undefined,
    },
    {
      id: '8',
      cardNumber: '****2541',
      cardType: 'Credit',
      status: 'Blocked',
      issuedDate: new Date('2021-04-12'),
      expiryDate: new Date('2025-04-12'),
      customerName: 'Tom Wilson',
      customerEmail: 'tom@example.com',
      lastActivity: new Date('2024-01-12'),
      accountType: 'Current',
      branch: 'Victoria Island',
      cardSerialNumber: '',
      selected: undefined,
      dateIssued: undefined,
    },
  ];

  getCards(): Observable<CardRecord[]> {
    console.log(
      'CardService: getCards() called, returning',
      this.mockData.length,
      'records'
    );
    return of(this.mockData);
  }

  getTotalCards(): Observable<CardRecord[]> {
    console.log(
      'CardService: getTotalCards() called, returning',
      this.mockData.length,
      'records'
    );
    return of(this.mockData);
  }

  getAvailableCards(): Observable<CardRecord[]> {
    const availableCards = this.mockData.filter(
      (card) => card.status === 'Available'
    );
    console.log(
      'CardService: getAvailableCards() called, returning',
      availableCards.length,
      'records'
    );
    return of(availableCards);
  }

  getIssuedCards(): Observable<CardRecord[]> {
    const issuedCards = this.mockData.filter(
      (card) => card.status === 'Active' || card.status === 'Blocked'
    );
    console.log(
      'CardService: getIssuedCards() called, returning',
      issuedCards.length,
      'records'
    );
    return of(issuedCards);
  }

  getActiveCards(): Observable<CardRecord[]> {
    const activeCards = this.mockData.filter(
      (card) => card.status === 'Active'
    );
    console.log(
      'CardService: getActiveCards() called, returning',
      activeCards.length,
      'records'
    );
    return of(activeCards);
  }

  getBlockedCards(): Observable<CardRecord[]> {
    const blockedCards = this.mockData.filter(
      (card) => card.status === 'Blocked'
    );
    console.log(
      'CardService: getBlockedCards() called, returning',
      blockedCards.length,
      'records'
    );
    return of(blockedCards);
  }

  getHopCards(): Observable<CardRecord[]> {
    const hopCards = this.mockData.filter((card) => card.cardType === 'HOP');
    console.log(
      'CardService: getHopCards() called, returning',
      hopCards.length,
      'records'
    );
    return of(hopCards);
  }

  getExpiryCards(): Observable<CardRecord[]> {
    const now = new Date();
    const thirtyDaysFromNow = new Date(
      now.getTime() + 30 * 24 * 60 * 60 * 1000
    );
    const expiryCards = this.mockData.filter(
      (card) => card.expiryDate <= thirtyDaysFromNow
    );
    console.log(
      'CardService: getExpiryCards() called, returning',
      expiryCards.length,
      'records'
    );
    return of(expiryCards);
  }

  getAllCards(): Promise<CardRecord[]> {
    console.log(
      'CardService: getAllCards() called, returning',
      this.mockData.length,
      'records'
    );
    return Promise.resolve(this.mockData);
  }

  blockCard(cardId: string): Promise<boolean> {
    const card = this.mockData.find((c) => c.id === cardId);
    if (card) {
      card.status = 'Blocked';
      console.log(
        'CardService: blockCard() called for card',
        cardId,
        '- blocked successfully'
      );
      return Promise.resolve(true);
    }
    console.log(
      'CardService: blockCard() called for card',
      cardId,
      '- card not found'
    );
    return Promise.resolve(false);
  }
}
