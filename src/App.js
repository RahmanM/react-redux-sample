import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/todo-component';
import TodoDetail from "./components/todo-detail-component";
import UserDetail from "./components/user-detail-component";
import {createStore} from 'redux';
import allReducers from './reducers/index'
import {Provider} from 'react-redux';


const store = createStore(allReducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <div>
                <h1>An example of react app using redux.</h1>
                <hr></hr>
            </div>
            <h2>Todos</h2>
            <Todo></Todo>

            <h2>Todo Details</h2>
            <TodoDetail />

            <h2>User Details</h2>
            <UserDetail />
        </div>
      </Provider>
    );
  }
}

export default App;
