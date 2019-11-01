import React from 'react';
import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };
  }

  render() {
    const {
      offers,
    } = this.props;

    return (
      <Main
        apartments={offers}
        onCardHover={this.onHoverHandler.bind(this)}
      />
    );
  }

  onHoverHandler(data) {
    this.setState({activeOffer: data});
  }

}

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
