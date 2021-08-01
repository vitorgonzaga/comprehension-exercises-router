import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <h2>Users</h2>
        <p>{`${ greetingsMessage } id: ${ id }, My awesome Users component`}</p>
        {/* <Link to="/">Home</Link> */}
      </div>
    );
  }
};

export default Users;
