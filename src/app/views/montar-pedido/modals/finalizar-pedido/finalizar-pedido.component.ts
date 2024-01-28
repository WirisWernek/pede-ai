import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FinalizarPedidoModel } from 'src/app/models/finalizar-pedido.model';
import { FinalizarPedidoService } from 'src/app/services/finalizar-pedido.service';

@Component({
	selector: 'app-finalizar-pedido',
	templateUrl: './finalizar-pedido.component.html',
	styleUrls: ['./finalizar-pedido.component.scss'],
})
export class FinalizarPedidoComponent {
	textoPedido!: string;
	finalizarPedido!: FinalizarPedidoModel;
	form: FormGroup;

	ruaValida = true;
	numeroValido = true;
	referenciaValida = true;
	pagamentoValido = true;

	constructor(
		public modalRef: BsModalRef,
		private formBuilder: FormBuilder,
		private finalizarPedidoService: FinalizarPedidoService
	) {
		this.form = this.formBuilder.group({
			rua: ['', Validators.required],
			numero: ['', Validators.pattern('^[0-9]*$')],
			semNumero: [false],
			referencia: ['', Validators.required],
			formaPagamento: ['', Validators.required],
			precisaChavePix: [false],
			precisaTroco: [false],
		});
	}

	cancelar() {
		this.modalRef.hide();
	}

	continuar() {
		this.validate();
		if(this.ruaValida && this.referenciaValida && this.numeroValido && this.pagamentoValido){
			this.finalizarPedidoService.finalizar(this.finalizarPedido);
			this.modalRef.hide();
		}
	}

	private loadDataFromForm(){
		this.finalizarPedido = this.form.value;
		this.finalizarPedido.itens = this.textoPedido;
	}

	private validate() {
		this.validateRua();
		this.validateNumero();
		this.validateFormaPagamento();
		this.validateReferencia();
	}

	validateRua() {
		this.loadDataFromForm();
		if (this.finalizarPedido.rua === '') {
			this.ruaValida = false;
			return;
		}
		this.ruaValida = true;
	}

	validateReferencia() {
		this.loadDataFromForm();
		if (this.finalizarPedido.referencia === '') {
			this.referenciaValida = false;
			return;
		}
		this.referenciaValida = true;
	}

	validateNumero() {
		this.loadDataFromForm();
		if (!this.finalizarPedido.semNumero) {
			if (this.finalizarPedido.numero === '' || isNaN(Number.parseInt(this.finalizarPedido.numero))) {
				this.numeroValido = false;
				return;
			}
		}
		this.numeroValido = true;
	}

	validateFormaPagamento() {
		this.loadDataFromForm();
		if (this.finalizarPedido.formaPagamento === '') {
			this.pagamentoValido = false;
			return;
		}
		this.pagamentoValido = true;
	}
}

// [ngClass]=" emailCopiaValido ? 'form-control' : 'form-control is-invalid'"
