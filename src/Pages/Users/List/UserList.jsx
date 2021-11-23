import { Component } from "react";
import NavBar from "../../../Components/Navbar/NavBar";
import TableContainers from "../../../Components/Tables/TableContainers";
import TableUsers from "../../../Components/Tables/TableUsers";
import store from "../../../store";


export default class UserList extends Component{

  render(){
    const state = store.getState();
    const users = state.sessionReducer.users;
    return(
      <div className="row">
        <NavBar />
        <br />
        <br />
        <div className="col">
          <div className="d-flex justify-content-center" style={{ paddingTop:'1rem' }} >
            <h1>Lista de Usuarios</h1>
          </div>
          <div className="row">
            <div className="col-2"/>
            <div className="col-8">
              <br />
              <table class="table">
                <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Correo</th>
                      <th>Teléfono</th>
                      <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                  <TableUsers users={users} />
                </tbody>
              </table>
            </div>
            <div className="col-2"/>
          </div>
        </div>
      </div>
      );
  }
}
