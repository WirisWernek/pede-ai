import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MontarPedidoComponent } from './views/montar-pedido/montar-pedido.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
