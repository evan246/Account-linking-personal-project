import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-activation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-activation.html',
  styleUrls: ['./card-activation.scss'],
})
export class CardActivationComponent {
  cardInput = '';
  verifyCard() {
    alert('Verifying card: ' + this.cardInput);
  }
}
