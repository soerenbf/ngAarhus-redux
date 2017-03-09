import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';

import { todoListActions } from './todo-list/';

import { IAppState } from './app.redux';

interface ITodoForm {
  todo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Awesome Angular todo list!';
  form: ITodoForm = {} as ITodoForm;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  onSubmit(form: NgForm) {
    this.ngRedux.dispatch(todoListActions.addTodo(this.form.todo));
    form.reset();
  }
}
