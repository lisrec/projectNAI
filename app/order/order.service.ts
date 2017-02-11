import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {
	
	constructor(private http: Http) {}

	orderMovies(req: any): Observable<String> {
		return this.http.post('http://localhost:8081/api/borrow', req)
			.map((res) => res.json());
	}

}