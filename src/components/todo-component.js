
import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import todoSelected from '../actions/action-todo-selected'


class Todo extends Component {
  render() {
    return (
      <div  className="details">
          {this.renderList()}
      </div>
    )
  }

  renderList() {
    return this.props.todos.map((todo) => {
        return (
            <div >
              <div key={todo.id} className="highlighted" onClick={() => this.props.todoSelected(todo)} >
                <span>{todo.taskTitle} </span>         
              </div>
            </div>
        );
    });
  }
}

function mapStateToProps(state) {
  return {
      todos: state.todos
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({todoSelected: todoSelected}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Todo);