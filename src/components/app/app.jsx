import React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import {ActionCreator} from '../../reducer.js';

class App extends PureComponent {

componentDidMount() {
  this.props.dispatch(ActionCreator.getHotels())
}

  render() {
    return (
      !this.props.authorization ?
      <Main
      /> :
      <SignIn />
    );
  }
}

const mapStateToProps = (state) => ({
  hotels: state.hotels,
  authorization: state.isAuthorizationRequired,
});


export default connect(mapStateToProps)(App);
