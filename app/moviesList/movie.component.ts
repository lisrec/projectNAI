import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './movie.model';


@Component({
	moduleId: module.id,
	selector: 'my-movie',
	templateUrl: 'movie.component.html',
	styleUrls: [ 'movie.component.css' ]
})
export class MovieComponent {

	@Input() public movie: Movie;
	@Output() addToCart : EventEmitter<Movie> = new EventEmitter<Movie>();
    
    clickAddToCart () {
        this.addToCart.emit(this.movie);
    }
    
}