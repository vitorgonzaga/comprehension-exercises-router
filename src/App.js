import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {/* utilizar ":" (doi pontos) siginifica que a palavra seguinte sera um alias para uma variável a ser definida na url */}
            <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning" /> } />
            <Route path="/about" component={About} />
            <Route path="/strict-access" render={() => <StrictAccess user={({ username: 'joao', password: '1234' })} /> } />
            <Route exact path="/" component={Home} />
          </Switch>
          <nav className="nav-style">
            <div className="link"><Link to="/home">Home</Link></div>
            <div className="link"><Link to="/users">Users</Link></div>
            <div className="link"><Link to="/about">About</Link></div>
            <div className="link"><Link to="/strict-access">Strict Access</Link></div>
          </nav>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
