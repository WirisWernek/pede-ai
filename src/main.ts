import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app/app.component';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.router';
import { AlertService } from './app/services/alert.service';
import { FinalizarPedidoService } from './app/services/finalizar-pedido.service';
import { PedidoService } from './app/services/pedido.service';
import { ValidatePedidoService } from './app/services/validate-pedido.service';
import { WhatsappService } from './app/services/whatsapp.service';

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			BrowserModule,
			ModalModule.forRoot()
		),
		AlertService,
		PedidoService,
		ValidatePedidoService,
		WhatsappService,
		FinalizarPedidoService,
		provideHttpClient(withInterceptorsFromDi()),
		provideAnimations(),
		provideRouter(routes),
	],
}).catch((err) => console.error(err));
