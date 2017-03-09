import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Rx';

import { IAppState } from '../app.redux';

import { ITodo, actions } from './todo-list.redux';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

  @select('todoList') todos$: Observable<ITodo[]>;
  @select('todoFilter') activeFilter$: Observable<string>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  toggleCompleted = (id: number) => this.ngRedux.dispatch(actions.toggleCompleted(id));

}
