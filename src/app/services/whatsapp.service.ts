import { Injectable } from '@angular/core';

@Injectable()
export class WhatsappService {
	WHATSAPP_NUMBER = '5528999814672';

	carregarLinkWhatsApp(pedido: string) {
		const userAgent = window.navigator.userAgent;
		let link = '';

		if (
			userAgent.includes('iPhone') ||
			userAgent.includes('Android') ||
			userAgent.includes('webOS') ||
			userAgent.includes('BlackBerry') ||
			userAgent.includes('iPod')
		) {
			link = 'whatsapp://send?phone=' + this.WHATSAPP_NUMBER + '&text=' + pedido;
		} else {
			link = 'https://web.whatsapp.com/send?phone=' + this.WHATSAPP_NUMBER + '&text=' + pedido;
		}

		return link;
	}

	pedir(url: string) {
		const link = document.createElement('a');
		link.href = url;
		link.target = '_blank'
		link.dispatchEvent(
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
				view: window,
			})
		);

		setTimeout(() => {
			link.remove();
		}, 100);
	}
}
