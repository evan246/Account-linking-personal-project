import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardRecordService } from '../card-record.service';

@Component({
  selector: 'app-instant-card-issuance-record',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './instant-card-issuance-record.html',
  styleUrls: ['./instant-card-issuance-record.scss'],
})
export class InstantCardIssuanceRecordComponent {
  constructor(private cardRecordService: CardRecordService) {}
  get rows() {
    return this.cardRecordService.getInstantRecords();
  }
}
