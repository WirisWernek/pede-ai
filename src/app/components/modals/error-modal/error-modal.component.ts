import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-error-modal',
    templateUrl: './error-modal.component.html',
    styleUrls: ['./error-modal.component.scss'],
    standalone: true
})
export class ErrorModalComponent {
	erros!: string[];

	constructor(public modalRef: BsModalRef){}
	
	voltar() {
		this.modalRef.hide();
	}
}
