const counterReducer = (state = 0, action = {}) => {
    switch(action.type) {
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
};

class CounterApp {
    constructor(reducer) {
        this.countEl = document.getElementById('count');
        this.store = Redux.createStore(reducer);

        this.store.subscribe(() => this.countEl.innerText = this.store.getState());
        this.store.dispatch({type: 'INIT'});
    }

    decrement() {
        this.store.dispatch({type: 'DECREMENT'});
    }

    increment() {
        this.store.dispatch({type: 'INCREMENT'});
    }
}

window.counterApp = new CounterApp(counterReducer);

console.assert(counterReducer(0) === 0, 'State not returned');
console.assert(counterReducer(1, {type: 'DECREMENT'}) === 0, 'Decrement failed');
console.assert(counterReducer(1, {type: 'INCREMENT'}) === 2, 'Increment failed');