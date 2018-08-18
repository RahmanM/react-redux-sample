
const todoSelected = (todo) => {   
    return {
        type: 'TODO_SELECTED',
        payload: todo
    }
};

export default todoSelected;