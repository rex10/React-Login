import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home/Home';
import { PrivateRoute } from './Utils/PrivateRoute';
import { connect } from 'react-redux';

import { history } from '../src/helpers';
import { alertActions } from '../src/actions';

class App extends Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}

render(){
  const { alert } = this.props;
    return (
      <div className="container-fluid">
        <div>
            {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
              }
              <Router history={history}>
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                </Switch>
              </Router>
            </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}


export default connect(mapStateToProps)(App);