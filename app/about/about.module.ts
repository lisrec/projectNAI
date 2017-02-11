import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AboutComponent }   from './about.component';

import { AboutService } from './about.service';

//import { TodoListComponent } from './todo-list.component';
//import { TodoComponent } from './todo.component';
//import { TodoService } from './todoList.service';

@NgModule({
    imports: [
    			CommonModule,
    			HttpModule
    		 ],
    declarations: [ 
    				AboutComponent
    			  ],
    exports: [
    			AboutComponent
    		 ],
    providers: [
    			AboutService
    		   ]
})
export class AboutModule {

} 