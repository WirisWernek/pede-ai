import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent {
	constructor(public modalRef: BsModalRef){}
	cancelar() {
		this.modalRef.hide();
	}
}
