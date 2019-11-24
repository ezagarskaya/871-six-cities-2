import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import React from "react";
import thunk from 'redux-thunk';
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";
import {reducer} from "./reducer.js";
import api from './api.js';


const init = (apartments) => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
      )
  );
  /* eslint-enable */

  ReactDOM.render(<Provider store={store}>
    <App offers={apartments}/>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init(offers);
