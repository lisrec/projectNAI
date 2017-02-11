import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { AboutInfo } from './about.model';

@Injectable()
export class AboutService {
	
	constructor(private http: Http) {}

	getAbout(): Observable<AboutInfo> {
		return this.http.get('http://localhost:8081/api/about')
			.map((res) => res.json());
	}

}