import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shared-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop fade show" *ngIf="isOpen"></div>
    <div class="custom-modal" *ngIf="isOpen" (click)="close()">
      <div
        class="modal-dialog modal-dialog-centered"
        style="max-width: 500px"
        (click)="$event.stopPropagation()"
      >
        <div class="modal-content border-0 shadow-lg">
          <div class="modal-header border-0 pb-0 position-relative">
            <ng-content select="[modal-title]"></ng-content>
            <button
              type="button"
              class="custom-close-btn"
              (click)="close()"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <div class="modal-body card-modal-body">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss'],
})
export class SharedModalComponent implements OnInit, OnDestroy {
  isOpen = false;
  private sub!: Subscription;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.sub = this.modalService.modalState$.subscribe((state) => {
      this.isOpen = state.open;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  close() {
    this.modalService.close();
  }
}
