import { Component } from '@angular/core';
import { ItensPedido } from 'src/app/models/itens-pedido.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-montar-pedido',
  templateUrl: './montar-pedido.component.html',
  styleUrls: ['./montar-pedido.component.scss'],
})
export class MontarPedidoComponent {
  itensPedido: ItensPedido = new ItensPedido();
  textoPedido = '';

  constructor(private alertService: AlertService){}

  openModalInfo(){
	this.alertService.showInfo();
  }

  openModalSuccess(){
	this.alertService.showSuccess();
  }

  openModalError(){
	this.alertService.showError();
  }

  pedir() {
    console.log(this.itensPedido);
    this.montarDadosPedido();
    console.log(this.textoPedido);
  }

  private montarDadosPedido() {
    if(!this.montarTipo()){
		console.log("foi")
	}
    this.montarTamanho();
  }

  private montarTipo(): boolean {
    switch (this.itensPedido.tipo) {
      case 'natural':
        this.textoPedido = this.textoPedido.concat('Gostaria de pedir 1 Açaí');
        break;
      case 'zero':
        this.textoPedido = this.textoPedido.concat(
          'Gostaria de pedir 1 Açaí Zero'
        );
        break;
      default:
        return false;
    }
    return true;
  }
  private montarTamanho(): boolean {
    switch (this.itensPedido.tamanho) {
      case '300ml':
        this.textoPedido = this.textoPedido.concat(' de 300 ML');
        break;
      case '500ml':
        this.textoPedido = this.textoPedido.concat(' de 500 ML');
        break;
      case '710ml':
        this.textoPedido = this.textoPedido.concat(' de 710 ML');
        break;
      case '1l':
        this.textoPedido = this.textoPedido.concat(' de 1L');
        break;
      case 'barca':
        this.textoPedido = this.textoPedido.concat(' uma barca');
        break;
      case 'roleta':
        this.textoPedido = this.textoPedido.concat(' uma roleta');
        break;
      default:
        return false;
    }
    return true;
  }
}
