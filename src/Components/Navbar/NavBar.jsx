import React from 'react';
import { store } from '../../store';
import CartList from '../CartList/CartList';

import './navBar.scss';
import Logo from '../../Complements/Images/Logo.png';

// eslint-disable-next-line
import $ from 'jquery';

function NavBar() {
// eslint-disable-next-line
  const cartList = () => { return( <CartList /> )};
  const state = store.getState();
  const logged = state.sessionReducer.session;
  if (logged) {
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="" height="50" className="d-inline-block align-top" />
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#84c0ea" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav">
            <li className="navbar-left">
              <a href="/about" className="nav-link">Nuestros productos</a>
            </li>
            <li className="navbar-left">
              <a href="/about" className="nav-link">Sobre nosotros</a>
            </li>
            <li className="navbar-left">
              <a href="/contact" className="nav-link">Contactanos</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto flex-grow-1 text-right justify-content-end">
            <li className="navbar-right">
              <a className="nav-link" href="/login">Mi cuenta</a>
            </li>
            &nbsp;
            &nbsp;
            <li className="navbar-right">
              <i className="navbar-brand">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#E3DAC9" className="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </i>
              <span className="badge badge-warning" id="lblCartCount">
                { state.cartReducer.count }
              </span>
            </li>
          </ul>
        </div>

      </nav>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        <img src={Logo} alt="" height="50" className="d-inline-block align-top" />
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#84c0ea" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav">
          <li className="navbar-left">
            <a href="/products" className="nav-link">Nuestros productos</a>
          </li>
          <li className="navbar-left">
            <a href="/about" className="nav-link">Sobre nosotros</a>
          </li>
          <li className="navbar-left">
            <a href="/contact" className="nav-link">Contactanos</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto flex-grow-1 text-right justify-content-end">
          <li className="navbar-right">
            <a className="nav-link" href="/login">Iniciar sesión</a>
          </li>
          <li className="navbar-right">
            <a className="nav-link" href="/signup">Registrarme</a>
          </li>
          &nbsp;
          &nbsp;
          <li className="navbar-right">
            <i className="navbar-brand">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#E3DAC9" className="bi bi-cart2" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </i>
            <span className="badge badge-warning" id="lblCartCount">
              { state.cartReducer.count }
            </span>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default NavBar;
