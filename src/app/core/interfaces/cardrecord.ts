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
  dateIssued?: Date;
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
