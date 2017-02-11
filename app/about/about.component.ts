import { Component, OnInit } from '@angular/core';
import { AboutInfo } from './about.model';
import { AboutService } from './about.service';

@Component({
	moduleId: module.id,
	selector: 'my-about',
	templateUrl: 'about.component.html',
	styleUrls: [ 'about.component.css' ]
})
export class AboutComponent implements OnInit {

	public about: AboutInfo;

	constructor(private aboutService: AboutService) {}

	ngOnInit () {
        this.aboutService.getAbout()
        	.subscribe(about => {
        		this.about = about;
        	});
    }
}