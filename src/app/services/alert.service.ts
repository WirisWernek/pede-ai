import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ErrorModalComponent } from '../components/modals/error-modal/error-modal.component';
import { InfoModalComponent } from '../components/modals/info-modal/info-modal.component';
import { SuccessModalComponent } from '../components/modals/success-modal/success-modal.component';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  bsModalRef?: BsModalRef;
  DEFAULT_MODAL_OPTIONS = {
    class: 'modal-sm modal-dialog-centered',
    ignoreBackdropClick: true,
    backdrop: true,
    keyboard: true,
    animated: true,
  };

  constructor(private modalService: BsModalService) {}
  showError() {
    this.bsModalRef = this.modalService.show(
      ErrorModalComponent,
      this.DEFAULT_MODAL_OPTIONS
    );
  }
  showInfo() {
    this.bsModalRef = this.modalService.show(
      InfoModalComponent,
      this.DEFAULT_MODAL_OPTIONS
    );
  }
  showSuccess() {
    this.bsModalRef = this.modalService.show(
      SuccessModalComponent,
      this.DEFAULT_MODAL_OPTIONS
    );
  }
}
