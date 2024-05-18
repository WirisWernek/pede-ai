import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
	@Input() title: string = 'Açaí';
	counter$: Observable<number> = of(0);

	constructor(private router: Router, private itemService: ItemService) {}

	ngOnInit(): void {
		this._loadCounter();
	}
	goCart() {
		this.router.navigateByUrl('carrinho');
	}
	_loadCounter() {
		this.itemService.getAll().then((items) => {
			this.counter$ = of(items.length);
		});
	}
}
