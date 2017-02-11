import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { Movie } from './movie.model';

@Injectable()
export class MoviesListService {
	
	constructor(private http: Http) {}

	getMovies(): Observable<Movie[]> {
		return this.http.get('http://localhost:8081/api/movies')
			.map((res) => res.json());
	}

	getMoviesByCat(catId: string): Observable<Movie[]> {
		return this.http.get('http://localhost:8081/api/movies/'+catId)
			.map((res) => res.json());
	}

}