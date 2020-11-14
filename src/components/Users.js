import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username} - {user.hometown}</li>)}
          <p>Total User Count: {this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
