import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* utilizar ":" (doi pontos) siginifica que a palavra seguinte sera um alias para uma variável a ser definida na url */}
        <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning" /> } />
        <nav className="nav-style">
          <div><Link to="/home">Home</Link></div>
          <div><Link to="/users">Users</Link></div>
          <div><Link to="/about">About</Link></div>
        </nav>
      </BrowserRouter>
    );
  }
}

export default App;
