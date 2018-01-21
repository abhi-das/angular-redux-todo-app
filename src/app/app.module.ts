import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { IappState, INITIAL_STATE, rootReducer } from './store';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

	constructor(private _ngRedux: NgRedux < IappState > ) {


		_ngRedux.configureStore(rootReducer, INITIAL_STATE);

	}
}
