export interface CardRecord {
  id: string;
  cardNumber: string;
  cardType: string;
  status: string;
  issuedDate: Date;
  expiryDate: Date;
  customerName: string;
  customerEmail: string;
  lastActivity: Date;
  accountType: string;
  branch: string;
  cardSerialNumber?: string;
  selected?: boolean;
  accountNumber?: string;
  dateIssued: Date;
}

export interface CardActivationData {
  cardId: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  accountType: string;
  branch: string;
  activationReason?: string;
  activationDate: Date;
  activatedBy: string;
}

export interface ActivationHistory {
  id: string;
  cardId: string;
  action: 'Activated' | 'Deactivated' | 'Blocked' | 'Unblocked';
  timestamp: Date;
  performedBy: string;
  reason?: string;
  customerName?: string;
  customerEmail?: string;
}

export interface FilterOptions {
  accountType: string;
  cardType: string;
  branch: string;
  dateIssued: string;
}

export interface CardStats {
  total: number;
  available: number;
  issued: number;
  active: number;
  blocked: number;
  expired: number;
}

export interface FilterOptions {
  accountType: string;
  cardType: string;
  branch: string;
  dateIssued: string;
}
