import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ItensPedido } from 'src/app/models/itens-pedido.model';
import { AlertService } from 'src/app/services/alert.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ValidatePedidoService } from 'src/app/services/validate-pedido.service';
import { FinalizarPedidoComponent } from './modals/finalizar-pedido/finalizar-pedido.component';

@Component({
	selector: 'app-montar-pedido',
	templateUrl: './montar-pedido.component.html',
	styleUrls: ['./montar-pedido.component.scss'],
})
export class MontarPedidoComponent {
	itensPedido: ItensPedido = new ItensPedido();
	textoPedido = '';
	bsModalRef?: BsModalRef;

	constructor(
		private alertService: AlertService,
		private pedidoService: PedidoService,
		private validatePedidoService: ValidatePedidoService,
		private modalService: BsModalService
	) {}

	pedir() {
		if (this.montarDadosPedido()) {
			this.bsModalRef = this.modalService.show(FinalizarPedidoComponent, {
				class: 'modal modal-dialog-centered',
				ignoreBackdropClick: true,
				backdrop: true,
				keyboard: true,
				animated: true,
				initialState: { textoPedido: this.textoPedido },
			});
		}
	}

	private montarDadosPedido(): boolean {
		const erros = this.validate();
		if (erros.length > 0) {
			this.alertService.showError(erros);
			return false;
		}
		this.textoPedido = this.pedidoService.generateTextoMensagem(this.itensPedido);
		return true;
	}

	private validate() {
		const erros = [];

		if (!this.validatePedidoService.validarTipo(this.itensPedido)) {
			erros.push('Tipo Inválido');
		}

		if (!this.validatePedidoService.validarTamanho(this.itensPedido)) {
			erros.push('Tamanho Inválido');
		}

		if (this.validatePedidoService.validarCoberturas(this.itensPedido)) {
			erros.push('Máximo de 2 coberturas permitidas');
		}

		if (this.validatePedidoService.validarComplementos(this.itensPedido)) {
			erros.push('Máximo de 4 complementos Permitidos');
		}

		if (this.validatePedidoService.validarFrutas(this.itensPedido)) {
			erros.push('Máximo de 2 frutas permitidas');
		}

		if (!this.validatePedidoService.validarAdicionais(this.itensPedido, false)) {
			erros.push('Adicionais inválidos');
		}

		return erros;
	}
}
