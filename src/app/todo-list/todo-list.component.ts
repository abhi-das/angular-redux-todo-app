import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

import { NgRedux, select } from '@angular-redux/store';
import { IappState } from '../store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_ALL_TODO, REMOVE_TODO} from '../todo.actions';
import { Itodo } from '../todo.model';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

	@select() todos;

	// createTodo: FormGroup;

	model: Itodo = {
		id: 0,
		description: '',
		responsibility: '',
		priority: '',
		isCompleted: false
	};

	constructor(private _ngRedux: NgRedux < IappState >) { }

	ngOnInit() {

		// this.createTodo = new FormBuilder({})

	}

	onTodoSubmit() {


		this._ngRedux.dispatch({type: ADD_TODO, todo: this.model});
	}

	onToggleTodo(todo) {

		this._ngRedux.dispatch({type: TOGGLE_TODO, id: todo.id});
	}

	onRemoveTodo(todo) {
		// console.log(todo);
		this._ngRedux.dispatch({type: REMOVE_TODO, id: todo.id});
	}

}
