import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const { greetingMessage } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingMessage }, My awesome Users component </p>
        <Link to="/">Home</Link>
      </div>
    );
  }
};

export default Users;
