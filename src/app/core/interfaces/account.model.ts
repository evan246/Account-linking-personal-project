export interface PersonalInformation {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  profileImage?: string;
}

export interface AccountDetails {
  accountNumber: string;
  accountOpening: string;
  accountStatus: 'Active' | 'Inactive' | 'Pending';
}

export interface BankAccount extends AccountDetails {
  type: 'Savings' | 'Current' | 'Dollar' | 'Trust Fund';
  title: string;
  selected?: boolean;
}

export interface CardHistory {
  cardNumber: string;
  cardType: string;
  dateIssued: string;
  expiryDate: string;
}

export interface AccountInformation {
  personalInfo: PersonalInformation;
  accounts: BankAccount[];
  cardHistory: CardHistory[];
}
