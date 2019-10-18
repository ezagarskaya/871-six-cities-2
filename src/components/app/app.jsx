import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {apartmentTitle} = props;

  return <Main
    title={apartmentTitle}
  />;
};

App.propTypes = {
  apartmentTitle: PropTypes.array.isRequired,
};

export default App;
