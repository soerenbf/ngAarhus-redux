import { counterActions } from './counter.redux';

class CounterController {
    constructor($ngRedux) {
        this.unsubscribe = $ngRedux.connect((state) => ({value: state.counter}), counterActions)(this);
    }

    ngOnDestroy() {
        this.unsubscribe();
    }
}

export const counterComponent  = {
    controller: CounterController,
    template: `
        <button ng-click="$ctrl.decrement()">-</button>
        {{$ctrl.value}}
        <button ng-click="$ctrl.increment()">+</button>
    `
};