import { Component, useState } from "react";
import PhoneInput from "react-phone-input-2";
import NavBar from "../../../Components/Navbar/NavBar";
import 'react-phone-input-2/lib/material.css'
import { ValidatorForm } from 'react-material-ui-form-validator';
import UsersService from'../../../Services/Users'
import Swal from 'sweetalert2'

export default class Profile extends Component{

  constructor(props) {
    super(props);
    this.state = {
      user:{
      }
    };
  }


  loadData = () =>{
    let { user } = this.state;
    UsersService.getUser().then(response => {
      console.log(response.data)
      if(response.status === 200){
        console.log(response.data.user.email)
        user['name'] = response.data.user.name;
        user['lname'] = response.data.user.lastname;
        user['email'] = response.data.user.email;
        user['phone'] = response.data.user.phone;
        user['direc'] = response.data.user.address;
        user['educ']= response.data.user.education;
        user['role']= response.data.user.position;
        user['income'] = response.data.user.income;
        user['bthd'] = response.data.user.bdate
        user['type'] = response.data.user.utype;
        this.setState({user})
        console,log("fdfs")
      }else if(response.status === 401){
      }
      }).catch(e => {

      });
    }

  render(){
      this.loadData();
    return(
      <div className="row">
        <NavBar />
        <br />
        <br />
        <div className="col">
          <div className="d-flex justify-content-center" style={{ paddingTop:'1rem' }} >
            <h1>Perfil de  Usuario</h1>
          </div>
          <div className="row">
          <div className="col-1"/>
            <div className="col-10">
              <div className="card radius-card text-center">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                          <br />
                          <div className="row">
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="text" className="form__field" placeholder="Nombre" name="name" id="name" required value={this.state.user.name} onChange={this.handleChange} disabled />
                                <label htmlFor="name" className="form__label">Nombre(s)</label>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="text" className="form__field" placeholder="lname" name="lname" id="lname" required value={this.state.user.lname} onChange={this.handleChange} disabled />
                                <label htmlFor="lname" className="form__label">Apellido(s)</label>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="email" className="form__field" placeholder="email" name="email" id="email" required value={this.state.user.email} onChange={this.handleChange} disabled />
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
                                disabled
                              />
                            </div>
                            <div className="col-8" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="text" className="form__field" placeholder="direc" name="direc" id="direc" required value={this.state.user.direc} onChange={this.handleChange} disabled />
                                <label htmlFor="direc" className="form__label">Dirección</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                            <div className="form__group field">
                                <input type="text" className="form__field" placeholder="direc" name="direc" id="direc" required value={this.state.user.role} onChange={this.handleChange} disabled />
                                <label htmlFor="direc" className="form__label">Rol de usuario</label>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                            <div className="form__group field">
                                <input type="text" className="form__field" placeholder="direc" name="direc" id="direc" required value={this.state.user.educ} onChange={this.handleChange} disabled />
                                <label htmlFor="direc" className="form__label">Nivel de educación</label>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <div className="form__group field">
                                <input type="number" min="0" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" data-type="currency" className="form__field" placeholder="income" name="income" id="income" required value={this.state.user.income} onChange={this.handleChange} disabled/>
                                <label htmlFor="income" className="form__label">Sueldo</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6" style={{ paddingLeft:'2rem' }}>
                            <div className="form__group field">
                                <input type="text" className="form__field" placeholder="direc" name="direc" id="direc" required value={this.state.user.type} onChange={this.handleChange} disabled />
                                <label htmlFor="direc" className="form__label">Tipo de usuario</label>
                              </div>
                            </div>
                            <div className="col-4" style={{ paddingLeft:'2rem' }}>
                              <p>Fecha de nacimiento</p>
                              <h3>{this.state.user.bthd}</h3>
                            </div>
                          </div>
                          <br />
                          <br />
                          <div className="row">
                            <div className="col-3" />
                            <div className="col-6" style={{ paddingLeft:'2rem' }}>
                            </div>
                          </div>
                        </div>
                    </div>
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
