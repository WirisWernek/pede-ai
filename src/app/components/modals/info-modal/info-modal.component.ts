import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent {
	alertas!: string[];

	constructor(public modalRef: BsModalRef){}
	continuar() {
		this.modalRef.hide();
	}
}
