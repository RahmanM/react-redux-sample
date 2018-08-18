 function ActiveTodoReducer (state = null, action) {
    switch (action.type) {
        case 'TODO_SELECTED':
            return action.payload;
            break;
    }
    return state;
}

export default ActiveTodoReducer;