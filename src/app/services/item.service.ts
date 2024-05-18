import { Injectable, Injector } from '@angular/core';
import { ItensPedido } from '../models/itens-pedido.model';
import { IndexedDBAbstract } from './indexed-db.service';

@Injectable({
	providedIn: 'root',
})
export class ItemService extends IndexedDBAbstract<ItensPedido> {
	constructor(protected injectable: Injector) {
		super(injectable, 'itens');
	}
}
