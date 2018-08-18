import {combineReducers} from 'redux';
import TodosReducer from './reducer-todos';
import ActiveTodoReducer from './reducer-active-todo';
import ActiveUserReducer from './reduser-active-user';

const allReducers = combineReducers({
    todos: TodosReducer,
    activeTodo: ActiveTodoReducer,
    activeUser: ActiveUserReducer
});

export default allReducers;