import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-request',
  imports: [FormsModule, CommonModule],
  templateUrl: './card-request.html',
  styleUrl: './card-request.scss',
})
export class CardRequest {
  userInput = '';
  loading = false; 
   
 selectedAccountType: string | null = null;
  constructor(private router: Router) {}

  verifyCustomer() {
    this.loading = true;
    const userData = {
      name: 'Anetoh Chidiogo Evangeline',
      dob: '14th, March 1997',
      gender: 'Female',
      accountNumber: this.userInput || '1234567890',
    };
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/card-inventory/card-request/account'], {
        state: { user: userData },
      });
    }, 1500);
  } 
   selectAccountType(type: string) {
    this.selectedAccountType = type;
  } 
   onInitiateCardRequest() {
    if (this.selectedAccountType) {
      this.router.navigate(['/card-inventory/initiate-cardrequest']);
    }
  }

}
