import { actions } from './todo-list.redux';

class TodoListController {
    constructor($ngRedux) {
        this.unsubscribe = $ngRedux.connect((state) => ({todos: state.todos, filter: state.filter}), actions)(this);
    }

    ngOnDestroy() {
        this.unsubscribe();
    }
}

export const todoListComponent = {
    controller: TodoListController,
    template: `
        <ul class="todo-list">
            <li
                ng-repeat="todo in $ctrl.todos | showBy: $ctrl.filter" ng-click="$ctrl.toggleCompleted(todo.id)"
                ng-class="{'completed': todo.completed}"
            >{{todo.title}}</li>
        </ul>
    `
};
