import { Injectable } from '@angular/core';
import { ItensPedido } from '../models/itens-pedido.model';

@Injectable()
export class PedidoService {
	private textoPedido = '';

	generateTextoMensagem(pedido: ItensPedido): string {
		this.textoPedido = '';
		this.getTextoTipo(pedido);
		this.getTextoTamanho(pedido);
		this.getTextoComplementos(pedido);
		this.getTextoCoberturas(pedido);
		this.getTextoFrutas(pedido);
		this.getTextoAdicionais(pedido);
		return this.textoPedido;
	}

	getTextoTipo(pedido: ItensPedido) {
		switch (pedido.tipo) {
			case 'natural':
				this.textoPedido = this.textoPedido.concat('Gostaria de pedir 1 Açaí');
				break;
			case 'zero':
				this.textoPedido = this.textoPedido.concat('Gostaria de pedir 1 Açaí Zero');
				break;
			default:
				this.textoPedido = this.textoPedido.concat('Não informado  %0A');
				break;
		}
	}
	getTextoTamanho(pedido: ItensPedido) {
		switch (pedido.tamanho) {
			case '300ml':
				this.textoPedido = this.textoPedido.concat(' de 300 ML  %0A');
				break;
			case '500ml':
				this.textoPedido = this.textoPedido.concat(' de 500 ML  %0A');
				break;
			case '710ml':
				this.textoPedido = this.textoPedido.concat(' de 710 ML  %0A');
				break;
			case '1l':
				this.textoPedido = this.textoPedido.concat(' de 1L  %0A');
				break;
			case 'barca':
				this.textoPedido = this.textoPedido.concat(' tamanho barca  %0A');
				break;
			case 'roleta':
				this.textoPedido = this.textoPedido.concat(' tamanho roleta  %0A');
				break;
			default:
				this.textoPedido = this.textoPedido.concat(' não informado  %0A');
				break;
		}
	}

	getTextoComplementos(pedido: ItensPedido) {
		let temComplemento = false;
		let itensComplemento = '';

		if (pedido.complemento_amendoim) {
			itensComplemento = itensComplemento.concat('- Amendoim  %0A');
			temComplemento = true;
		}
		if (pedido.complemento_canudinhos) {
			itensComplemento = itensComplemento.concat('- Canudinho  %0A');
			temComplemento = true;
		}
		if (pedido.complemento_disqueti) {
			itensComplemento = itensComplemento.concat('- Disqueti  %0A');
			temComplemento = true;
		}
		if (pedido.complemento_flocos_de_arroz) {
			itensComplemento = itensComplemento.concat('- Flocos de Arroz  %0A');
			temComplemento = true;
		}
		if (pedido.complemento_granola) {
			itensComplemento = itensComplemento.concat('- Granola  %0A');
			temComplemento = true;
		}
		if (pedido.complemento_granulado) {
			itensComplemento = itensComplemento.concat('- Granulado  %0A');
			temComplemento = true;
		}
		if (pedido.complemento_leite_em_po) {
			itensComplemento = itensComplemento.concat('- Leite em pó  %0A');
			temComplemento = true;
		}
		if (pedido.complemento_pacoca) {
			itensComplemento = itensComplemento.concat('- Paçoca  %0A');
			temComplemento = true;
		}
		if (pedido.complemento_sucrilhos) {
			itensComplemento = itensComplemento.concat('- Sucrilhos  %0A');
			temComplemento = true;
		}

		if (temComplemento) {
			this.textoPedido = this.textoPedido.concat('*Complementos:*  %0A');
			this.textoPedido = this.textoPedido.concat(itensComplemento);
		} else {
			this.textoPedido = this.textoPedido.concat('*Complementos:* Nenhum  %0A');
		}
	}

	getTextoCoberturas(pedido: ItensPedido) {
		let temCobertura = false;
		let itensCobertura = '';

		if (pedido.cobertura_chocolate) {
			itensCobertura = itensCobertura.concat('- Calda de Chocolate  %0A');
			temCobertura = true;
		}
		if (pedido.cobertura_kiwi) {
			itensCobertura = itensCobertura.concat('- Calda de Kiwi  %0A');
			temCobertura = true;
		}
		if (pedido.cobertura_leite_condensado) {
			itensCobertura = itensCobertura.concat('- Leite Condensado  %0A');
			temCobertura = true;
		}
		if (pedido.cobertura_limao) {
			itensCobertura = itensCobertura.concat('- Calda de Limão  %0A');
			temCobertura = true;
		}
		if (pedido.cobertura_mel) {
			itensCobertura = itensCobertura.concat('- Mel  %0A');
			temCobertura = true;
		}
		if (pedido.cobertura_menta) {
			itensCobertura = itensCobertura.concat('- Calda de Menta  %0A');
			temCobertura = true;
		}
		if (pedido.cobertura_morango) {
			itensCobertura = itensCobertura.concat('- Calda de Morango  %0A');
			temCobertura = true;
		}

		if (temCobertura) {
			this.textoPedido = this.textoPedido.concat('*Coberturas:*  %0A');
			this.textoPedido = this.textoPedido.concat(itensCobertura);
		} else {
			this.textoPedido = this.textoPedido.concat('*Coberturas:* Nenhuma  %0A');
		}
	}

	getTextoFrutas(pedido: ItensPedido) {
		let temFruta = false;
		let itensFrutas = '';

		if (pedido.fruta_abacaxi) {
			itensFrutas = itensFrutas.concat('- Abacaxi  %0A');
			temFruta = true;
		}
		if (pedido.fruta_banana) {
			itensFrutas = itensFrutas.concat('- Banana  %0A');
			temFruta = true;
		}
		if (pedido.fruta_morango) {
			itensFrutas = itensFrutas.concat('- Morango  %0A');
			temFruta = true;
		}
		if (pedido.fruta_uva) {
			itensFrutas = itensFrutas.concat('- Uva  %0A');
			temFruta = true;
		}

		if (temFruta) {
			this.textoPedido = this.textoPedido.concat('*Frutas:*  %0A');
			this.textoPedido = this.textoPedido.concat(itensFrutas);
		} else {
			this.textoPedido = this.textoPedido.concat('*Frutas:* Nenhuma  %0A');
		}
	}

	getTextoAdicionais(pedido: ItensPedido) {
		let temAdicional = false;
		let itensAdicionais = '';

		if (pedido.adicional_balas_fini) {
			itensAdicionais = itensAdicionais.concat('- Balas Fini  %0A');
			temAdicional = true;
		}
		if (pedido.adicional_chocoball_power) {
			itensAdicionais = itensAdicionais.concat('- Chocoball Power  %0A');
			temAdicional = true;
		}
		if (pedido.adicional_creme_de_leite_ninho) {
			itensAdicionais = itensAdicionais.concat('- Creme de Leite Ninho  %0A');
			temAdicional = true;
		}
		if (pedido.adicional_gotas_de_chocolate) {
			itensAdicionais = itensAdicionais.concat('- Gotas de Chocolate  %0A');
			temAdicional = true;
		}
		if (pedido.adicional_kit_kat) {
			itensAdicionais = itensAdicionais.concat('- Kit Kat  %0A');
			temAdicional = true;
		}
		if (pedido.adicional_nutella) {
			itensAdicionais = itensAdicionais.concat('- Nutella  %0A');
			temAdicional = true;
		}
		if (pedido.adicional_ovomaltine) {
			itensAdicionais = itensAdicionais.concat('- Ovomaltine  %0A');
			temAdicional = true;
		}
		if (pedido.adicional_tortuguita) {
			itensAdicionais = itensAdicionais.concat('- Tortuguita  %0A');
			temAdicional = true;
		}

		if (temAdicional) {
			this.textoPedido = this.textoPedido.concat('*Adicionais:*  %0A');
			this.textoPedido = this.textoPedido.concat(itensAdicionais);
		} else {
			this.textoPedido = this.textoPedido.concat('*Adicionais:* Nenhum  %0A');
		}
	}
}
