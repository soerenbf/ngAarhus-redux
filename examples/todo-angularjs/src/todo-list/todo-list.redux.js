export const actions = {
    toggleCompleted: (todoId) => ({type: 'TOGGLE_COMPLETED', todoId})
};

export const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return state.concat([action.todo]);
        case 'TOGGLE_COMPLETED':
            return state.map(todo => 
                (todo.id === action.todoId)
                    ? Object.assign({}, todo, {completed: !todo.completed})
                    : todo);
        default:
            return state;
    }
};