import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { MontarPedidoComponent } from './views/montar-pedido/montar-pedido.component';

const routes: Routes = [
  {
    path: 'acai',
    component: MontarPedidoComponent,
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent,
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
