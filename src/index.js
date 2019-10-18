import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const apartments = [`Beautiful & luxurious apartment at great location`,
    `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];

  ReactDOM.render(
      <App apartmentTitle={apartments}/>,
      document.querySelector(`#root`)
  );
};

init();
