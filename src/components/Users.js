import React, { Component } from 'react';
import { connect } from 'react-redux'

// add any needed imports here
class Users extends Component {

  renderUsers = () => {return this.props.users.map(user => <li>{user.username}</li>)}

  render() {
    return (
      <div>
        {this.props.userCount}
        <ul>
          {this.renderUsers()}
          
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const msp = (state) => {
  return { users: state.users, userCount: state.users.length }
}
// connect this component to Redux
export default connect(msp)(Users)
