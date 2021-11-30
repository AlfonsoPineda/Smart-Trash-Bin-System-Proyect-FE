import { Component, useState } from "react";
import PhoneInput from "react-phone-input-2";
import NavBar from "../../../Components/Navbar/NavBar";
import 'react-phone-input-2/lib/material.css'
import { ValidatorForm } from 'react-material-ui-form-validator';


export default class UserAdd extends Component{

  constructor(props) {
    super(props);
    this.state = {
      user:{
        name:'',
        lname:'',
        email:'',
        phone:'',
        direc:'',
        educ:'',
        role:'',
        income:'',
        bthd:'',
        type:''
      }
    };
  }

  phoneChange = (event) =>{
    let { user } = this.state;
    user.phone = event;
    this.setState({ user });
  }

  handleChange = (event) =>{
    console.log(event)
    let { user } = this.state;
    user[event.target.id] = event.target.value;
    this.setState({ user });
    console.log(this.state.user);
  }

  render(){
    return(
      <div className="row">
        <NavBar />
        <br />
        <br />
        <div className="col">
          <div className="d-flex justify-content-center" style={{ paddingTop:'1rem' }} >
            <h1>Agregar Usuario</h1>
          </div>
          <div className="row">
          <div className="col-1"/>
            <div className="col-10">
              <div className="card radius-card text-center">
                <div className="card-body">
                  <ValidatorForm  onError={errors => console.log(errors)}
                onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-12">
                          <br />
                          <div className="row">
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="text" className="form__field" placeholder="Nombre" name="name" id="name" required value={this.state.user.name} onChange={this.handleChange} />
                                <label htmlFor="name" className="form__label">Nombre(s)</label>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="text" className="form__field" placeholder="lname" name="lname" id="lname" required value={this.state.user.lname} onChange={this.handleChange} />
                                <label htmlFor="lname" className="form__label">Apellido(s)</label>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="email" className="form__field" placeholder="email" name="email" id="email" required value={this.state.user.email} onChange={this.handleChange} />
                                <label htmlFor="email" className="form__label">Correo electrónico</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <br />
                              <PhoneInput
                                country={'mx'}
                                value={this.state.user.phone}
                                id="phone"
                                onChange={this.phoneChange}
                                specialLabel="Telefono"
                                containerStyle	={{ marginTop:'0.5rem' }}
                                inputStyle={{ height:'2.3rem' }}
                              />
                            </div>
                            <div className="col-8" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="text" className="form__field" placeholder="direc" name="direc" id="direc" required value={this.state.user.direc} onChange={this.handleChange} />
                                <label htmlFor="direc" className="form__label">Dirección</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="select-group">
                                <label htmlFor="educ">Puesto</label>
                                <select aria-label="Default select example" name="role" id="role" value={this.state.user.role} onChange={this.handleChange}>
                                  <option defaultValue>Puesto</option>
                                  <option value="1">Recolector</option>
                                  <option value="2">Administrativo</option>
                                  <option value="3">Otro</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="select-group">
                                <label htmlFor="educ">Educación</label>
                                <select aria-label="Default select example" name="educ" id="educ" value={this.state.user.educ} onChange={this.handleChange}>
                                  <option defaultValue>Educación</option>
                                  <option value="1">Ninguna</option>
                                  <option value="2">Primaria</option>
                                  <option value="3">Secundaria</option>
                                  <option value="4">Bachillerato</option>
                                  <option value="5">Licenciatura</option>
                                  <option value="6">Otro</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="number" min="0" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" data-type="currency" className="form__field" placeholder="income" name="income" id="income" required value={this.state.user.income} onChange={this.handleChange} />
                                <label htmlFor="income" className="form__label">Sueldo</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6" style={{ paddingLeft:'2rem' }}>
                              <div className="select-group">
                                <label htmlFor="educ">Tipo de usuario</label>
                                <select aria-label="Default select example" name="type" id="type" value={this.state.user.type} onChange={this.handleChange}>
                                  <option defaultValue>Tipo de usuario</option>
                                  <option value="Admin">Administrador</option>
                                  <option value="Common">Común</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <label htmlFor="bthd" className="form__label">Fecha de nacimiento</label>
                                <input type="date" className="form__field" placeholder="bthd" name="bthd" id="bthd" required value={this.state.user.bthd} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>
                          <br />
                          <br />
                          <div className="row">
                            <div className="col-3" />
                            <div className="col-6" style={{ paddingLeft:'2rem' }}>
                              <button className="btn btn-primary access-btn" type="submit">Agregar Usuario</button>
                            </div>
                          </div>
                        </div>
                    </div>
                  </ValidatorForm>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      );
    }
}
