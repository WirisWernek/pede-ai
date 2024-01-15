import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MontarPedidoComponent } from './views/montar-pedido/montar-pedido.component';

const routes: Routes = [
  {
    path: '',
    component: MontarPedidoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
