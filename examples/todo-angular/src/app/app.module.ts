import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { IAppState, rootReducer } from './app.redux';

import { TodoListComponent, FilterByPipe } from './todo-list/';
import { TodoFilterComponent } from './todo-filter/';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FilterByPipe,
    TodoFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {} as IAppState);
  }
}
