import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-success-modal',
    templateUrl: './success-modal.component.html',
    styleUrls: ['./success-modal.component.scss'],
    standalone: true
})
export class SuccessModalComponent {
	mensagens!: string[];
	constructor(public modalRef: BsModalRef){}
	voltar() {
		this.modalRef.hide();
	}
}
