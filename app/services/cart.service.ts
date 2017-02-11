import { Injectable } from '@angular/core';
import { Movie } from './../moviesList/movie.model';

@Injectable()
export class CartService {
	
	public moviesCart: Array<Movie> = [];

	constructor() {
		let storedCart = JSON.parse(localStorage.getItem('currentCart'));
		this.moviesCart = storedCart || [];
	}

	updateLocalstorage() {
		localStorage.setItem('currentCart', JSON.stringify(this.moviesCart));
	}

	addItem(movie: Movie): boolean {
		this.moviesCart.push(movie);
		this.updateLocalstorage();
		return true;
	}

	removeOneItem(id: number): boolean {
		if(id >= 0 && id < this.moviesCart.length) {
			this.moviesCart.splice(id, 1);
			this.updateLocalstorage();
			return true;
		} else {
			return false;
		}
	}

	removeAll(): boolean {
		this.moviesCart = [];
		this.updateLocalstorage();
		return true;
	}

	countAll(): number {
		return this.moviesCart.length;
	}

	getAll(): Array<Movie> {
		return this.moviesCart;
	}
}