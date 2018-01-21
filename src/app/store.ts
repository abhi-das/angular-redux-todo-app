import { Itodo } from './todo.model';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODO } from './todo.actions';

export interface IappState {
	todos: Itodo[];
	lastUpdate: Date;
}

export const INITIAL_STATE: IappState = {
	todos: [],
	lastUpdate: null
};

export function rootReducer(state, action) {

	switch (action.type) {

		// Action 1
		case ADD_TODO:

				action.todo.id = state.todos.length + 1;

				// Create new state
				const newState: IappState = {
					todos: state.todos.concat(Object.assign({}, action.todo)),
					lastUpdate: new Date()
				};

				// Merge new state in existing state
				return Object.assign({}, state, newState);

		// Action 2
		case TOGGLE_TODO:

				const updatedTodo = state.todos;

				updatedTodo.map(prop => {
					return prop.id === action.id ? prop.isCompleted = !prop.isCompleted : '';
				});

				console.log('update existing todo > ', updatedTodo);

				return Object.assign({}, state, {
					todos: updatedTodo,
					lastUpdate: new Date()
				});

		// Action 3
		case REMOVE_TODO:

			const todo = state.todos.find( todo => todo.id === action.id);
			const idx = state.todos.indexOf(todo);
			const updateWithDeletedTodo = state.todos;

			updateWithDeletedTodo.splice(idx, 1);

			return Object.assign({}, state, {
				todos: updateWithDeletedTodo,
				lastUpdate: new Date()
			});

		// Action 4
		case REMOVE_ALL_TODO:

			return Object.assign({}, state, {
				todos: [],
				lastUpdate: new Date()
			});

	}

	return state;
}
