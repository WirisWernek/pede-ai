import { BaseModel } from './base-model';

export class ItensPedido extends BaseModel {
	tipo: string;
	tamanho: string;
	nome: string;

	complemento_leite_em_po: boolean;
	complemento_granola: boolean;
	complemento_amendoim: boolean;
	complemento_flocos_de_arroz: boolean;
	complemento_pacoca: boolean;
	complemento_disqueti: boolean;
	complemento_sucrilhos: boolean;
	complemento_granulado: boolean;
	complemento_canudinhos: boolean;

	cobertura_morango: boolean;
	cobertura_kiwi: boolean;
	cobertura_limao: boolean;
	cobertura_chocolate: boolean;
	cobertura_menta: boolean;
	cobertura_mel: boolean;
	cobertura_leite_condensado: boolean;

	fruta_morango: boolean;
	fruta_banana: boolean;
	fruta_uva: boolean;
	fruta_abacaxi: boolean;

	adicional_tortuguita: boolean;
	adicional_nutella: boolean;
	adicional_creme_de_leite_ninho: boolean;
	adicional_balas_fini: boolean;
	adicional_kit_kat: boolean;
	adicional_gotas_de_chocolate: boolean;
	adicional_chocoball_power: boolean;
	adicional_ovomaltine: boolean;

	observacao: string;

	constructor() {
		super();
		this.tipo = '';
		this.tamanho = '';
		this.nome = '';
		this.complemento_leite_em_po = false;
		this.complemento_granola = false;
		this.complemento_amendoim = false;
		this.complemento_flocos_de_arroz = false;
		this.complemento_pacoca = false;
		this.complemento_disqueti = false;
		this.complemento_sucrilhos = false;
		this.complemento_granulado = false;
		this.complemento_canudinhos = false;
		this.cobertura_morango = false;
		this.cobertura_kiwi = false;
		this.cobertura_limao = false;
		this.cobertura_chocolate = false;
		this.cobertura_menta = false;
		this.cobertura_mel = false;
		this.cobertura_leite_condensado = false;
		this.fruta_morango = false;
		this.fruta_banana = false;
		this.fruta_uva = false;
		this.fruta_abacaxi = false;
		this.adicional_tortuguita = false;
		this.adicional_nutella = false;
		this.adicional_creme_de_leite_ninho = false;
		this.adicional_balas_fini = false;
		this.adicional_kit_kat = false;
		this.adicional_gotas_de_chocolate = false;
		this.adicional_chocoball_power = false;
		this.adicional_ovomaltine = false;
		this.observacao = '';
	}
}
