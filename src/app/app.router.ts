import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'acai',
		loadComponent: () =>
			import('./views/montar-pedido/montar-pedido.component').then(
				(c) => c.MontarPedidoComponent
			),
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'acai',
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'acai',
	},
];
