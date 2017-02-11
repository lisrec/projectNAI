import { Component, OnInit } from '@angular/core';
import { Movie } from './../moviesList/movie.model';
import { CartService } from './../services/cart.service';
import { OrderService } from './order.service';

@Component({
	moduleId: module.id,
	selector: 'order',
	providers: [ OrderService ],
	templateUrl: 'order.component.html',
	styleUrls: [ 'order.component.css' ]
})
export class OrderComponent implements OnInit {

	cart: Array<Movie> = [];
	error: any = {
		isErr: false,
		msg: ""
	}
	orderData: any = {
		firstName: "",
		lastName: "",
		phone: ""
	};

	constructor(private cartService: CartService,
				private orderService: OrderService) {
		this.cart = this.cartService.getAll();
	}

	ngOnInit() {
		
	}

	removeOne(id: number) {
		if(this.cartService.removeOneItem(id)) {
			this.cart = this.cartService.getAll();
		}
	}

	removeAll() {
		if(this.cartService.removeAll()) {
			this.cart = this.cartService.getAll();
		}
	}

	orderSuccess() {
		alert('Zamówienie zakończone powodzeniem.');
		this.orderData = {
			firstName: "",
			lastName: "",
			phone: ""
		};
	}

	completeOrder() {

		let order: any = {
			form: {},
			movieIds: []
		};

		order.form = this.orderData;

		this.cart.forEach((row,index)=>{
			order.movieIds.push(row['id']);
		});

		order.movieIds.sort();

		this.orderService.orderMovies(order)
			.subscribe((res) => {
				console.log(res);
				if(!res['err']) {
					this.error.isErr = false;
					this.error.msg = "";
					this.removeAll();
					this.orderSuccess();
				} else {
					this.error.isErr = true;
					this.error.msg = res['msg'];
				}	
			});
	}
}