import React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';

import Main from '../main/main.jsx';
import {ActionCreator} from '../../reducer.js';

class App extends PureComponent {

componentDidMount() {
  this.props.dispatch(ActionCreator.getHotels())
}

  render() {
    return (
      <Main
      />
    );
  }
}

const mapStateToProps = (state) => ({
  hotels: state.hotels,
});


export default connect(mapStateToProps)(App);
