import React, { Component } from 'react'
import {connect} from 'react-redux';

class UserDetail extends Component {
  render() {
    if (!this.props.user) {
        return (<div>Select a user...</div>);
    }

    return (
        <div className="details">
            <div >
                Id: {this.props.user.userId}
            </div>
            <div>
                Name: {this.props.user.name}
            </div>
            <div>
                Department: {this.props.user.department}
            </div>
            <div>
                Email: {this.props.user.email}
            </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);