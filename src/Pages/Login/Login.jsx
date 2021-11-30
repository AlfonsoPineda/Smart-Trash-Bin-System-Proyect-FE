import React, { Component } from 'react';
import './Login.scss';
import Logo from '../../Complements/Images/Logo.png';
import Swal from 'sweetalert2'
import LoginService from'../../Services/Login';
import { ValidatorForm } from 'react-material-ui-form-validator';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{
        email:'',
        password:''
      }
    };
  }
  handleChange = (event) =>{
    let { user } = this.state;
    user[event.target.id] = event.target.value;
    this.setState({ user });
    console.log(this.state.user);
  }

  handleSubmit = () =>{
    let { user } = this.state;
        var userdata = {
            email: user.email,
            password: user.password,
        }
            LoginService.Login(userdata).then(response => {
                if(response.status === 201){
                    Swal.fire({
                        title: 'Inicio de sesión exitoso',
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    });
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('user', userdata.email)
                    window.location.reload()
                }else if(response.status === 401){
                    Swal.fire({
                        title: 'Error',
                        text: response.data.message,
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    });
                }
            }).catch(e => {
                console.log(e)
                Swal.fire({
                    title: 'Error',
                    text: 'Verifica tus credenciales',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            });
}

  render() {
    const mytoken = localStorage.getItem('token');
    if(mytoken === undefined || mytoken === null){
        //pass
    }else{
        window.location.replace('http://localhost:3000/Home')
    }
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
              <ValidatorForm
                onError={errors => console.log(errors)}
                onSubmit={this.handleSubmit}>
                <div className="form__group field">
                  <input type="email" className="form__field" placeholder="Email" name="email" id="email" required value={this.state.user.email} onChange={this.handleChange} />
                  <label htmlFor="email" className="form__label">Email</label>
                </div>
                <br />
                <div className="form__group field">
                  <input type="password" className="form__field" placeholder="Contraseña" name="password" id="password" required value={this.state.user.password} onChange={this.handleChange} />
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
              </ValidatorForm>
            </div>
          </div>
          <span className="span-space" />
        </div>
      </div>
    );
  }
}

export default Login;
