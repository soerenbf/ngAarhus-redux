import { Action } from 'redux';

interface ITodoFilterAction extends Action {
    payload: string;
}

const actionTypes = {
    SET_FILTER: 'SET_FILTER'
};

export const actions = {
    setFilter: (payload: string) => ({type: actionTypes.SET_FILTER, payload})
};

export const todoFilterReducer = (state = 'ALL', action: ITodoFilterAction): string => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload;
        default:
            return state;
    }
};
