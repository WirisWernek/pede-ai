import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ItensPedido } from 'src/app/models/itens-pedido.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
	selector: 'app-carrinho',
	templateUrl: './carrinho.component.html',
	styleUrl: './carrinho.component.scss',
})
export class CarrinhoComponent implements OnInit {
	itens$!: Observable<ItensPedido[]>;

	constructor(private router: Router, private itemService: ItemService) {}

	ngOnInit(): void {
		this._loadItens();
	}

	_loadItens() {
		this.itemService.getAll().then((items) => {
			this.itens$ = of(items);
		});
	}
}
