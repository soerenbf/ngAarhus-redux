import { combineReducers, Action } from 'redux';

import { todoFilterReducer as todoFilter } from './todo-filter/';
import { todoListReducer as todoList, ITodo } from './todo-list/';

export interface IAppState {
  todoFilter: string;
  todoList: ITodo[];
}

export const rootReducer = combineReducers<IAppState>({
  todoFilter,
  todoList
});
