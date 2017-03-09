import ngRedux from 'ng-redux';
import 'angular';

import { rootReducer } from './app.redux';
import { todoListComponent, showBy } from './todo-list/index';
import { todoFilterComponent } from './todo-filter/index';

import { rootComponent } from './app.component';

import '../public/scss/style.scss';

(function() {
    angular
        .module('app', [
            'ngRedux'
        ])
        .config(($ngReduxProvider) => $ngReduxProvider.createStoreWith(rootReducer))
        .component('root', rootComponent)
        .component('todoList', todoListComponent)
        .component('todoFilter', todoFilterComponent)
        .filter('showBy', showBy);
})();