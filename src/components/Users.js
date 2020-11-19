import React, { Component } from 'react';
import { connect} from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
        {users.length}
        <ul>
          Users!
          {users}

        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("Users.js", state.users)
  return { users: state.users }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
