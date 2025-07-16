import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardRecordService } from '../card-record.service';

@Component({
  selector: 'app-pre-personalised-linked-card-record',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pre-personalised-linked-card-record.html',
  styleUrls: ['./pre-personalised-linked-card-record.scss'],
})
export class PrePersonalisedLinkedCardRecordComponent {
  constructor(private cardRecordService: CardRecordService) {}
  get rows() {
    return this.cardRecordService.getPrePersonalisedRecords();
  }
}
