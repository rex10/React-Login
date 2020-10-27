import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;