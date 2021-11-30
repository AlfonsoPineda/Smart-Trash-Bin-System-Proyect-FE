import React, { Component } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import NavBar from '../../Components/Navbar/NavBar';

import './Signup.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{
        email:'',
        password:'',
        passwordconf:'',
      }
    };
  }
  handleChange = (event) =>{
    let { user } = this.state;
    user[event.target.id] = event.target.value;
    this.setState({ user });
    console.log(this.state.user);
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
        <NavBar />
        <div className="row d-flex justify-content-center">
          <h1 className="dark-text text-center signup-title bold-text">Registro</h1>
          <div className="card signup-card text-center">
            <div className="card-body">
              <h4 className="card-title dark-text">Completa tus datos</h4>
              <ValidatorForm onError={errors => console.log(errors)}
                onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <div className="row">
                  <div className="col-12">
                    <div className="form__group field">
                        <input type="email" className="form__field" placeholder="Email" name="email" id="email" required value={this.state.user.email} />
                        <label htmlFor="email" className="form__label">Email</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form__group field">
                      <input type="password" className="form__field" placeholder="Contraseña" name="password" id="password" required value={this.state.user.password}/>
                      <label htmlFor="password" className="form__label">Contraseña</label>
                    </div>
                    <p className="pwd-comment-unactive float-start">Tu contraseña debe tener al menos 8 caracteres.</p>
                    <br />
                    <br />
                  </div>
                  <div className="col-6">
                    <div className="form__group field">
                      <input type="password" className="form__field" placeholder="Confirmar contraseña" name="passwordconf" id="passwordconf" required value={this.state.user.passwordconf} />
                      <label htmlFor="password-confirm" className="form__label">Confirmar contraseña</label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary float-end signup-btn">Registrarme</button>
                  </div>
                </div>
              </ValidatorForm>

            </div>
          </div>
          <span className="span-space" />
        </div>
      </div>
    );
  }
}

export default Signup;
