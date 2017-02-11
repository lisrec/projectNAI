import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MoviesListComponent } from './moviesList.component';
import { MovieComponent } from './movie.component';
import { MoviesListService } from './moviesList.service';

const routes: Routes = [
    { path: '', component: MoviesListComponent },
    { path: ':cat', component: MoviesListComponent },
];

@NgModule({
    imports: [ 
    			CommonModule, 
    			HttpModule, 
    			FormsModule,
    			RouterModule.forChild(routes)
    		 ],
    declarations: [ MoviesListComponent, MovieComponent ],
    exports: [ MoviesListComponent ],
    providers: [ MoviesListService ]
})
export class MoviesModule {

} 