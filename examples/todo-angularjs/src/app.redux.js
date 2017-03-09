import { combineReducers } from 'redux';

import { todos } from './todo-list/index';
import { filter } from './todo-filter/index';

let nextTodoId = 0;
export const actions = {
    addTodo: (todo) => ({type: 'ADD_TODO', todo: {title: todo, completed: false, id: nextTodoId++}})
};

export const rootReducer = combineReducers({
    todos,
    filter
});