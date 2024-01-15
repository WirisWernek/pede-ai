import { Component } from '@angular/core';
import { ItensPedido } from 'src/app/models/itens-pedido.model';

@Component({
  selector: 'app-montar-pedido',
  templateUrl: './montar-pedido.component.html',
  styleUrls: ['./montar-pedido.component.scss'],
})
export class MontarPedidoComponent {
  itensPedido: ItensPedido = new ItensPedido() ;
  
  pedir(){
	console.log(this.itensPedido)
  }
}
