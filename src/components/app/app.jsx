import React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import {ActionCreator} from '../../reducer.js';

class App extends PureComponent {

  componentDidMount() {
    this.props.dispatch(ActionCreator.getHotels());
  }

  render() {
    if (this.props.authorization) {
      return (
        <Router>
          <Switch>
            <Route path="/" exact component={SignIn} />
          </Switch>
        </Router>
      );
    } else {
      return (
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/offer/:id" exact component={OfferDetails} />
          </Switch>
        </Router>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  hotels: state.hotels,
  authorization: state.isAuthorizationRequired,
});


export default connect(mapStateToProps)(App);
