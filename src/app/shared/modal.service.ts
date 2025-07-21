import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modalState = new Subject<{ open: boolean; data?: any }>();
  modalState$ = this.modalState.asObservable();

  open(data?: any) {
    this.modalState.next({ open: true, data });
  }

  close() {
    this.modalState.next({ open: false });
  }
}
