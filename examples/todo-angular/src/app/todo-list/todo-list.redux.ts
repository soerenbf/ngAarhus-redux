import { Action } from 'redux';

export interface ITodo {
    id: number;
    title: string;
    isCompleted: boolean;
}

interface ITodoAction extends Action {
    payload: ITodo | number;
}

const actionTypes = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_COMPLETED: 'TOGGLE_COMPLETED'
};

let nextTodoId = 0;
const createTodo = (title: string): ITodo => ({id: nextTodoId++, title, isCompleted: false});

export const actions = {
    addTodo: (title: string): ITodoAction => ({type: actionTypes.ADD_TODO, payload: createTodo(title)}),
    toggleCompleted: (id: number): ITodoAction => ({type: actionTypes.TOGGLE_COMPLETED, payload: id})
};

const todoReducer = (state: ITodo = {} as ITodo, action: ITodoAction): ITodo => {
    switch (action.type) {
        case actionTypes.TOGGLE_COMPLETED:
            // return state.id === action.payload ? { ...state, isCompleted: !state.isCompleted } : state;
            return state.id === action.payload ?
                Object.assign({}, state, { isCompleted: !state.isCompleted }) :
                state;
        default:
            return state;
    }
};

export const todoListReducer = (state: ITodo[] = [], action: ITodoAction): ITodo[] => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [...state, action.payload as ITodo];
        case actionTypes.TOGGLE_COMPLETED:
            return state.map(todo => todoReducer(todo, action));
        default:
            return state;
    }
};
