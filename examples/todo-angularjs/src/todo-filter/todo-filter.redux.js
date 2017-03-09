export const actions = {
    setFilter: (activeFilter) => ({type: 'SET_FILTER', activeFilter})
};

export const filter = (state = '', action) => {
    switch(action.type) {
        case 'SET_FILTER':
            return action.activeFilter;
        default:
            return state;
    }
};