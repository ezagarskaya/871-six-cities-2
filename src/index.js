import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";

const init = (apartments) => {
  ReactDOM.render(
      <App offers={apartments}/>,
      document.querySelector(`#root`)
  );
};

init(offers);
