import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux'

class Users extends Component {

  render() {
  let users = this.props.users.map(user=><li>{user.username}</li>)
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          Users!
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux

const msp = state =>{
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}
export default connect(msp)(Users)
