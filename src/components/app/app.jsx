import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

App.propTypes = {
  apartmentTitle: PropTypes.string.isRequired,
};

const App = (props) => {
  const {apartmentTitle} = props;

  return <Main
    title={apartmentTitle}
  />;
};

export default App;
