import React from 'react';
import store from '../../store';
import jwt from'jsonwebtoken';
import './navBar.scss';
import Logo from '../../Complements/Images/Logo.png';
import Swal from 'sweetalert2'

// eslint-disable-next-line
import $ from 'jquery';
import LoginService from '../../Services/Login'
import key from '../../Complements/Keys/JWTKey'

function logout(){
  LoginService.Logout({}).then(response => {
    if(response.status === 201){
            Swal.fire({
                title: 'Cierre de sesión exitoso',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
            localStorage.clear();
            window.location.reload()
        }else if(response.status === 401){
            Swal.fire({
                title: 'Error',
                text: response.data.message,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            localStorage.clear();
            window.location.reload()

        }
    }).catch(e => {
        console.log(e)
        Swal.fire({
            title: 'Error',
            text: 'Verifica tus credenciales',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
        localStorage.clear();
        window.location.reload()
    });
}

function NavBar() {
// eslint-disable-next-line
  const state = store.getState();
  try{
    let decoded = jwt.verify(localStorage.getItem("token"), key);
  }catch(error){
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="" height="50" className="d-inline-block align-top" style={{marginLeft:'1rem'}} />
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#84c0ea" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
      </nav>
    );
  }
  var deco = jwt.verify(localStorage.getItem("token"), key);
  console.log(deco.type)
  if(deco.type ===1 ){
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="" height="50" className="d-inline-block align-top" style={{marginLeft:'1rem'}} />
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#84c0ea" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/Home">Dashboard</a>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <a className="nav-dropbtn nav-link">Contenedores</a>
                <div className="dropdown-content">
                  <a href="/map">Mapa</a>
                  <a href="/ListContainers">Lista</a>
                  <a href="/AddContainer">Agregar</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <a className="nav-dropbtn nav-link">Usuarios</a>
                <div className="dropdown-content">
                  <a href="/ListUsers">Lista</a>
                  <a href="/AddUser">Agregar</a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto flex-grow-1 text-right justify-content-end">
          <li className="navbar-right">
            <a className="nav-link" href="/Profile">Mi perfil</a>
          </li>
          <li className="navbar-right">
            <button className="nav-link light-text logout" style={{background:'none', textDecoration:'none', border:'none'}} type="button" onClick={logout}>Cerrar sesión</button>
          </li>
          </ul>
        </div>

      </nav>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        <img src={Logo} alt="" height="50" className="d-inline-block align-top" style={{marginLeft:'1rem'}} />
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#84c0ea" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/Home">Dashboard</a>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <a className="nav-dropbtn nav-link">Contenedores</a>
              <div className="dropdown-content">
                <a href="/map">Mapa</a>
                <a href="/ListContainers">Lista</a>
              </div>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto flex-grow-1 text-right justify-content-end">
        <li className="navbar-right">
          <a className="nav-link" href="/Profile">Mi perfil</a>
        </li>
        <li className="navbar-right">
          <button className="nav-link light-text logout" style={{background:'none', textDecoration:'none', border:'none'}} type="button" onClick={logout}>Cerrar sesión</button>
        </li>
        </ul>
      </div>

    </nav>
  );

}

export default NavBar;
