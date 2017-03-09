export const counter = (state = 0, action) => {
    switch(action.type) {
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
};

export const counterActions = {
    decrement: () => ({type: 'DECREMENT'}),
    increment: () => ({type: 'INCREMENT'})
};