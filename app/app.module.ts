import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { MainPageComponent } from './mainPage/mainPage.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

import { AboutModule } from './about/about.module';
import { MoviesModule } from './moviesList/movies.module';
import { AppRoutingModule } from './app-routing.module';

import { CartService } from './services/cart.service';

@NgModule({
  imports:      [ 
  					BrowserModule,
            AppRoutingModule,
  					NgbModule.forRoot(),
            FormsModule,
            ReactiveFormsModule,
            AboutModule,
  					MoviesModule
  				],
  declarations: [ 
  					AppComponent,
            OrderComponent,
  					HeaderComponent,
            MainPageComponent,
            PageNotFoundComponent
  				],
  providers: [
            CartService
          ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
