import React, { Component } from 'react';
import NavBar from '../../Components/Navbar/NavBar';

import './Signup.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="row d-flex justify-content-center">
          <h1 className="dark-text text-center signup-title bold-text">Registro</h1>
          <div className="card signup-card text-center">
            <div className="card-body">
              <h4 className="card-title dark-text">Completa tus datos</h4>
              <form autoComplete="off">
                <div className="row">
                  <div className="col-6">
                    <div className="form__group field">
                      <input type="text" className="form__field" placeholder="Nombre(s)" name="name" id="name" required />
                      <label htmlFor="name" className="form__label">Nombre(s)</label>
                    </div>
                    <br />
                    <div className="form__group field">
                      <input type="tel" className="form__field" placeholder="Telefono" name="phone" id="phone" required />
                      <label htmlFor="phone" className="form__label">Telefono</label>
                    </div>
                    <br />
                    <div className="form__group field">
                      <input type="password" className="form__field" placeholder="Contraseña" name="password" id="password" required />
                      <label htmlFor="password" className="form__label">Contraseña</label>
                    </div>
                    <p className="pwd-comment-unactive float-start">Tu contraseña debe tener al menos 8 caracteres.</p>
                    <br />
                    <br />
                  </div>
                  <div className="col-6">
                    <div className="form__group field">
                      <input type="text" className="form__field" placeholder="Apellido(s)" name="lname" id="lname" required />
                      <label htmlFor="lname" className="form__label">Apellido(s)</label>
                    </div>
                    <br />
                    <div className="form__group field">
                      <input type="email" className="form__field" placeholder="Email" name="email" id="email" required />
                      <label htmlFor="email" className="form__label">Email</label>
                    </div>
                    <br />
                    <div className="form__group field">
                      <input type="password" className="form__field" placeholder="Confirmar contraseña" name="password-confirm" id="password-confirm" required />
                      <label htmlFor="password-confirm" className="form__label">Confirmar contraseña</label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary float-end signup-btn">Registrarme</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
          <span className="span-space" />
        </div>
      </div>
    );
  }
}

export default Signup;
