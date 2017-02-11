import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }   from './about/about.component';
import { MainPageComponent } from './mainPage/mainPage.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { OrderComponent } from './order/order.component';
import { MoviesListComponent } from './moviesList/moviesList.component';

const routes: Routes = [
  { path: '',  component: MainPageComponent },
  { path: 'list', loadChildren: 'app/moviesList/movies.module#MoviesModule' },
  { path: 'about',  component: AboutComponent },
  { path: 'order',  component: OrderComponent },
  { path: '**',  component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}