import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import userSelected from '../actions/action-user-selected';

class TodoDetail extends Component {
  render() {
    if (!this.props.todo) {
        return (<div>Select a todo...</div>);
    }
    else{
        this.props.userSelected(-1);
    }
   
    return (
        <div key={this.props.todo.id} className="details">
            <div>Id: {this.props.todo.id} </div>
            <div>Description: {this.props.todo.taskTitle} </div>
            <div>Completed: <input readOnly type="checkbox" checked={this.props.todo.done} ></input> </div>
            <div class="highlighted" onClick={() => this.props.userSelected(this.props.todo.userId)}>User: {this.props.todo.userId}</div>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        todo: state.activeTodo
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({userSelected: userSelected}, dispatch);
  }

export default connect(mapStateToProps,matchDispatchToProps)(TodoDetail);