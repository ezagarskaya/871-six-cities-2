import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

const SignIn = (props) => {
  const form = useRef(null);
  const submit = (e) => {
    e.preventDefault();
    const email = form.current.elements[0].value;
    const password = form.current.elements[1].value;
    props.dispatch(ActionCreator.logIn(email, password));
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" ref={form} onSubmit={submit} >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  current: state.currentCity,
  offers: state.currentOffers,
});

export default connect(mapStateToProps)(SignIn);
