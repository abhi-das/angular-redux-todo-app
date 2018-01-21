import { Component, OnInit } from '@angular/core';

import { NgRedux, select } from '@angular-redux/store';
import { IappState } from '../store';
import { REMOVE_ALL_TODO } from '../todo.actions';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.scss']
})
export class TodoOverviewComponent implements OnInit {

	@select() todos;
	@select() lastUpdate;


	constructor(private _ngRedux: NgRedux < IappState >) { }

	ngOnInit() {

	}

	clearAllTodo() {

		this._ngRedux.dispatch({type: REMOVE_ALL_TODO});

	}

}
