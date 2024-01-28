import { Injectable } from '@angular/core';
import { FinalizarPedidoModel } from '../models/finalizar-pedido.model';
import { WhatsappService } from './whatsapp.service';

@Injectable()
export class FinalizarPedidoService {
	textoPedido: string;

	finalizar(finalizarPedido: FinalizarPedidoModel) {
		this.textoPedido = finalizarPedido.itens;
		this.gerarDadosFinais(finalizarPedido);

		const link = this.whatsappService.carregarLinkWhatsApp(this.textoPedido);
		this.whatsappService.pedir(link);
	}

	constructor(private whatsappService: WhatsappService) {
		this.textoPedido = '';
	}

	gerarDadosFinais(finalizarPedido: FinalizarPedidoModel) {
		this.gerarDadosEntrega(finalizarPedido);
		this.gerarDadosPagamento(finalizarPedido);
	}

	gerarDadosEntrega(finalizarPedido: FinalizarPedidoModel) {
		this.textoPedido = this.textoPedido.concat('%0A*Entrega:*  %0A');

		this.textoPedido = this.textoPedido.concat(`- Rua: ${finalizarPedido.rua} %0A`);

		if (finalizarPedido.semNumero) {
			this.textoPedido = this.textoPedido.concat(`- Numero: Sem Numero %0A`);
		} else {
			this.textoPedido = this.textoPedido.concat(`- Numero: ${finalizarPedido.numero} %0A`);
		}

		this.textoPedido = this.textoPedido.concat(`- Referência: ${finalizarPedido.referencia} %0A`);
	}

	gerarDadosPagamento(finalizarPedido: FinalizarPedidoModel) {
		this.textoPedido = this.textoPedido.concat('%0A*Pagamento:*  %0A');

		switch (finalizarPedido.formaPagamento) {
			case 'CARTAO':
				this.textoPedido = this.textoPedido.concat(`- Tipo: Cartão`);
				break;
			case 'PIX':
				this.textoPedido = this.textoPedido.concat(`- Tipo: Pix`);

				if (finalizarPedido.precisaChavePix) {
					this.textoPedido = this.textoPedido.concat(', Poderia me manda a Chave do Pix?');
				}
				break;
			case 'DINHEIRO':
				this.textoPedido = this.textoPedido.concat(`- Tipo: Dinheiro`);

				if (finalizarPedido.precisaTroco) {
					this.textoPedido = this.textoPedido.concat(', Vou precisar de troco pro pagamento');
				}
				break;
			default:
				this.textoPedido = this.textoPedido.concat('- Tipo: Dinheiro, Vou precisar de troco pro pagamento');
		}

		this.textoPedido = this.textoPedido.concat('%0A %0A Agradeço(a).');
	}
}
