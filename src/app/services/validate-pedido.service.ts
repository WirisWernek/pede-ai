import { Injectable } from '@angular/core';
import { ItensPedido } from '../models/itens-pedido.model';

@Injectable()
export class ValidatePedidoService {
	validarTipo(pedido: ItensPedido) {
		let valido= false;

		switch (pedido.tipo) {
			case 'natural':
				valido = true;
				break;
			case 'zero':
				valido = true;
				break;
			default:
				valido = false;
				break;
		}
		return valido;
	}
	validarTamanho(pedido: ItensPedido) {
		let valido = false;

		switch (pedido.tamanho) {
			case '300ml':
				valido = true;
				break;
			case '500ml':
				valido = true;
				break;
			case '710ml':
				valido = true;
				break;
			case '1l':
				valido = true;
				break;
			case 'barca':
				valido = true;
				break;
			case 'roleta':
				valido = true;
				break;
			default:
				valido = false;
				break;
		}
		return valido;
	}

	validarComplementos(pedido: ItensPedido) {
		let temComplemento = false;
		let count = 0;

		if (pedido.complemento_amendoim) {
			count++;
			temComplemento = true;
		}
		if (pedido.complemento_canudinhos) {
			count++;
			temComplemento = true;
		}
		if (pedido.complemento_disqueti) {
			count++;
			temComplemento = true;
		}
		if (pedido.complemento_flocos_de_arroz) {
			count++;
			temComplemento = true;
		}
		if (pedido.complemento_granola) {
			count++;
			temComplemento = true;
		}
		if (pedido.complemento_granulado) {
			count++;
			temComplemento = true;
		}
		if (pedido.complemento_leite_em_po) {
			count++;
			temComplemento = true;
		}
		if (pedido.complemento_pacoca) {
			count++;
			temComplemento = true;
		}
		if (pedido.complemento_sucrilhos) {
			count++;
			temComplemento = true;
		}

		if (temComplemento) {
			return count > 4;
		} else {
			return false;
		}
	}

	validarCoberturas(pedido: ItensPedido) {
		let temCobertura = false;
		let count = 0;

		if (pedido.cobertura_chocolate) {
			count++;
			temCobertura = true;
		}
		if (pedido.cobertura_kiwi) {
			count++;
			temCobertura = true;
		}
		if (pedido.cobertura_leite_condensado) {
			count++;
			temCobertura = true;
		}
		if (pedido.cobertura_limao) {
			count++;
			temCobertura = true;
		}
		if (pedido.cobertura_mel) {
			count++;
			temCobertura = true;
		}
		if (pedido.cobertura_menta) {
			count++;
			temCobertura = true;
		}
		if (pedido.cobertura_morango) {
			count++;
			temCobertura = true;
		}

		if (temCobertura) {
			return count > 2;
		} else {
			return false;
		}
	}

	validarFrutas(pedido: ItensPedido) {
		let temFruta = false;
		let count = 0;

		if (pedido.fruta_abacaxi) {
			count++;
			temFruta = true;
		}
		if (pedido.fruta_banana) {
			count++;
			temFruta = true;
		}
		if (pedido.fruta_morango) {
			count++;
			temFruta = true;
		}
		if (pedido.fruta_uva) {
			count++;
			temFruta = true;
		}

		if (temFruta) {
			return count > 2;
		} else {
			return false;
		}
	}

	validarAdicionais(pedido: ItensPedido, devolverQuantidade: boolean) {
		let temAdicional = false;
		let count = 0;

		if (pedido.adicional_balas_fini) {
			count++;
			temAdicional = true;
		}
		if (pedido.adicional_chocoball_power) {
			count++;
			temAdicional = true;
		}
		if (pedido.adicional_creme_de_leite_ninho) {
			count++;
			temAdicional = true;
		}
		if (pedido.adicional_gotas_de_chocolate) {
			count++;
			temAdicional = true;
		}
		if (pedido.adicional_kit_kat) {
			count++;
			temAdicional = true;
		}
		if (pedido.adicional_nutella) {
			count++;
			temAdicional = true;
		}
		if (pedido.adicional_ovomaltine) {
			count++;
			temAdicional = true;
		}
		if (pedido.adicional_tortuguita) {
			count++;
			temAdicional = true;
		}

		if(devolverQuantidade){
			return count;
		}

		if (temAdicional) {
			return count > 0;
		} else {
			return true;
		}
	}
}
