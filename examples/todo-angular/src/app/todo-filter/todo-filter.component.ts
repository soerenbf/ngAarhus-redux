import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Rx';

import { IAppState } from '../app.redux';

import { actions } from './todo-filter.redux';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFilterComponent {

  @select('todoFilter') activeFilter$: Observable<string>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  updateFilter = (filter: string) => this.ngRedux.dispatch(actions.setFilter(filter));

}
