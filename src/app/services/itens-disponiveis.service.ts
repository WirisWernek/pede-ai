import { Injectable } from '@angular/core';
import { Itens } from '../models/itens.model';

@Injectable({
  providedIn: 'root'
})
export class ItensDisponiveisService {

  constructor() { }

  get(){
	const itens: Itens = {
		tipo: ['Natural', 'Zero Açúcar']
	}
	return 
  }

}
