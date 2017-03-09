import { actions } from './app.redux';

class RootController {
    constructor($ngRedux) {
        this.unsubscribe = $ngRedux.connect(null, actions)(this);
    }

    add() {
        this.addTodo(this.input);
        this.input = '';
    }

    ngOnDestroy() {
        this.unsubscribe();
    }
}

export const rootComponent = {
    controller: RootController,
    template: `
        <form ng-submit="$ctrl.add()">
            <input type="text" ng-model="$ctrl.input" />
            <button type="submit">ADD</button>
        </form>
        <todo-filter></todo-filter>
        <todo-list></todo-list>
    `
};