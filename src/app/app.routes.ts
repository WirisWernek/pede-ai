import { Routes } from '@angular/router';
import { MontarPedidoComponent } from './views/montar-pedido/montar-pedido.component';

export const routes: Routes = [
	{
		path: 'acai',
		component: MontarPedidoComponent,
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
