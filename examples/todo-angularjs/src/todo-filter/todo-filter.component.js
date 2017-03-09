import { actions } from './todo-filter.redux';

class TodoFilterController {
    constructor($ngRedux) {
        this.unsubscribe = $ngRedux.connect((state) => ({activeFilter: state.filter}), actions)(this);
    }

    ngOnDestroy() {
        this.unsubscribe();
    }
}

export const todoFilterComponent = {
    controller: TodoFilterController,
    template: `
    <div class="filter">
        <ul>
            <li ng-click="$ctrl.setFilter('all')" ng-class="{'active': $ctrl.activeFilter === 'all'}">All</li>
            <li ng-click="$ctrl.setFilter('active')" ng-class="{'active': $ctrl.activeFilter === 'active'}">Active</li>
            <li ng-click="$ctrl.setFilter('completed')" ng-class="{'active': $ctrl.activeFilter === 'completed'}">Completed</li>
        </ul>
    </div>
    `
};