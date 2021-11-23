import React, { Component } from 'react';
import './Login.scss';
import Logo from '../../Complements/Images/Logo.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="row d-flex justify-content-center">
          <div className="login-bar">
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="" height="70" className="d-inline-block align-top" />
            </a>
          </div>
          <div className="card login-card text-center">
            <div className="card-header">
              <h2 className="card-title dark-text bold-text">INICIAR SESIÓN</h2>
            </div>
            <div className="card-body">
              <span className="span-space-little" />
              <form action="">
                <div className="form__group field">
                  <input type="email" className="form__field" placeholder="Email" name="email" id="email" required />
                  <label htmlFor="email" className="form__label">Email</label>
                </div>
                <br />
                <div className="form__group field">
                  <input type="password" className="form__field" placeholder="Contraseña" name="password" id="password" required />
                  <label htmlFor="password" className="form__label">Contraseña</label>
                </div>
                <br />
                <button type="submit" className="btn btn-primary access-btn">Ingresar</button>
                <br />
                <br />
                <a href="/signup" className="btn signup-red-btn">Crear cuenta</a>
                <br />
                <br />
                <a href="/passwordForgot" className="password-forgot">Olvidé mi contraseña</a>
              </form>
            </div>
          </div>
          <span className="span-space" />
        </div>
      </div>
    );
  }
}

export default Login;
