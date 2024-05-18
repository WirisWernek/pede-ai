import { Injector } from '@angular/core';
import Dexie from 'dexie';

import { environment } from 'src/environments/environment';
import { BaseModel } from '../models/base-model';


export abstract class IndexedDBAbstract<T extends BaseModel> {
	private database: Dexie;
	private table: Dexie.Table<T, number>;

	constructor(protected injector: Injector, protected nomeTabela: string) {
		this.database = this.criarDatabase();
		this.table = this.database.table(this.nomeTabela);
	}

	private criarDatabase() {
		const database = new Dexie(environment.DATABASE_NAME);
		database.version(3).stores(environment.INDEXEDDB_TABLES);
		database.version(3).stores({
			[this.nomeTabela]: '++id',
		});

		return database;
	}

	async getAll() {
		let allItens: T[] = [];
		await await this.table.toArray().then(async (values) => {
			if (values != undefined && values != null) {
				allItens = values;
			}
		});
		return allItens;
	}

	async getById(id: number) {
		return await this.table.get(id);
	}

	async salvar(modelo: T) {
		await this.table
			.add(modelo)
			.then(async (id) => {
				console.log(`Salvo item de Id ${id} na tabela ${this.nomeTabela}.`);
			})
			.catch((err) =>
				console.log(`Erro ao incluir ${modelo} na tabela ${this.nomeTabela} no IndexedDb.`, err)
			);
	}

	// async update(modelo: T) {
	// 	await this.table
	// 		.update(modelo.id, modelo)
	// 		.then(async (id) => {
	// 			console.log(`Atualizado item de Id ${modelo.id} na tabela ${this.nomeTabela}.`);
	// 		})
	// 		.catch((err) =>
	// 			console.log(`Erro ao incluir ${modelo} na tabela ${this.nomeTabela} no IndexedDb.`, err)
	// 		);
	// }

	async deleteById(id: number) {
		await this.table.delete(id).then(async () => {
			console.log(`Item com ID ${id} deletado na tabela ${this.nomeTabela} do IndexedDb.`);
		});
	}
}