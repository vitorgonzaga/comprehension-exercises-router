import React from 'react';

class StrictAccess extends React.Component {
  render() {
    const { username, password } = this.props.user;
    return (
      (username === 'joao' && password === '1234') ? <p>Welcome João!</p> : alert('Access denied')
    );
  }
}

export default StrictAccess;
