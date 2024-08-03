import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FinalizarPedidoService } from './app/services/finalizar-pedido.service';
import { WhatsappService } from './app/services/whatsapp.service';
import { ValidatePedidoService } from './app/services/validate-pedido.service';
import { PedidoService } from './app/services/pedido.service';
import { AlertService } from './app/services/alert.service';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, ModalModule.forRoot()),
        AlertService,
        PedidoService,
        ValidatePedidoService,
        WhatsappService,
        FinalizarPedidoService,
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
