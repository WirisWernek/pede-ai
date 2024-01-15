import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ErrorModalComponent } from './components/modals/error-modal/error-modal.component';
import { InfoModalComponent } from './components/modals/info-modal/info-modal.component';
import { SuccessModalComponent } from './components/modals/success-modal/success-modal.component';
import { MontarPedidoComponent } from './views/montar-pedido/montar-pedido.component';

@NgModule({
  declarations: [AppComponent, MontarPedidoComponent, ErrorModalComponent, InfoModalComponent, SuccessModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
