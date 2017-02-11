import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from './movie.model';

import { MoviesListService } from './moviesList.service';
import { CartService } from './../services/cart.service';

@Component({
	moduleId: module.id,
	selector: 'my-moviesList',
	templateUrl: 'moviesList.component.html',
	styleUrls: [ 'moviesList.component.css' ]
})
export class MoviesListComponent implements OnInit {

	public movies: Array<Movie> = [];
	sub_params: any;
	category: string = "";

	constructor(private activatedRoute: ActivatedRoute,
				private moviesListService: MoviesListService,
				private cartService: CartService) {}

	ngOnInit() {
		this.sub_params = this.activatedRoute.params
			.subscribe(params => {
				this.category = params['cat'] || "";
				this.loadData(this.category);
			});
	}

	loadData(cat: string) {
		if(cat == ""){
			this.moviesListService.getMovies()
				.subscribe(movies => {
					this.movies = movies;
				});
		} else {
			this.moviesListService.getMoviesByCat(cat)
				.subscribe(movies => {
					this.movies = movies;
				});
		}
		
	}

	addToCart(e: Movie) {
		this.cartService.addItem(e);
	}
}