import { Component } from '@angular/core';
import { ItensPedido } from 'src/app/models/itens-pedido.model';
import { AlertService } from 'src/app/services/alert.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ValidatePedidoService } from 'src/app/services/validate-pedido.service';
import { WhatsappService } from 'src/app/services/whatsapp.service';

@Component({
	selector: 'app-montar-pedido',
	templateUrl: './montar-pedido.component.html',
	styleUrls: ['./montar-pedido.component.scss'],
})
export class MontarPedidoComponent {
	itensPedido: ItensPedido = new ItensPedido();
	textoPedido = '';

	constructor(
		private alertService: AlertService,
		private pedidoService: PedidoService,
		private validatePedidoService: ValidatePedidoService,
		private whatsappService: WhatsappService
	) {}

	pedir() {
		if(this.montarDadosPedido()){
			const link = this.whatsappService.carregarLinkWhatsApp(this.textoPedido);
			console.log(link);
			this.whatsappService.pedir(link);
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
