import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CardRecordService {
  instantRecords = [
    {
      customerName: 'Adeniyi Omolara',
      accountNumber: '5229982534',
      accountType: 'Savings',
      dateOfIssuance: '18-08-2015',
      status: 'issued to customer',
    },
  ];
  prePersonalisedRecords = [
    {
      customerName: 'Adeniyi Omolara',
      accountNumber: '5229982534',
      accountType: 'Savings',
      dateOfIssuance: '18-08-2015',
      status: 'issued to customer',
    },
    {
      customerName: 'John Doe',
      accountNumber: '1234567890',
      accountType: 'Current',
      dateOfIssuance: '20-08-2015',
      status: 'issued to customer',
    },
    {
      customerName: 'Jane Smith',
      accountNumber: '9876543210',
      accountType: 'Corporate',
      dateOfIssuance: '22-08-2015',
      status: 'issued to customer',
    },
    {
      customerName: 'Mike Johnson',
      accountNumber: '5556667777',
      accountType: 'Savings',
      dateOfIssuance: '25-08-2015',
      status: 'issued to customer',
    },
  ];

  addRecord(record: any) {
    this.instantRecords.push(record);
    this.prePersonalisedRecords.push(record);
  }

  getInstantRecords() {
    return this.instantRecords;
  }

  getPrePersonalisedRecords() {
    return this.prePersonalisedRecords;
  }

  getAllPrePersonalisedLinkedCard(category: string) {
    // Filter records based on the selected category
    return this.prePersonalisedRecords.filter((record) => {
      switch (category.toLowerCase()) {
        case 'savings':
          return record.accountType === 'Savings';
        case 'current':
          return record.accountType === 'Current';
        case 'corporate':
          return record.accountType === 'Corporate';
        case 'all':
          return true;
        default:
          return true;
      }
    });
  }
}
