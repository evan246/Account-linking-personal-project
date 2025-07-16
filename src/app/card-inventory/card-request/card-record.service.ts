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
}
