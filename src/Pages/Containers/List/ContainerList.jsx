import { Component } from "react";
import NavBar from "../../../Components/Navbar/NavBar";
import TableContainers from "../../../Components/Tables/TableContainers";
import store from "../../../store";


export default class ContainerList extends Component{

  render(){
  const state = store.getState();
  const containers = state.containersReducer.containers;
    console.log(containers)
    return(
      <div className="row">
        <NavBar />
        <br />
        <br />
        <div className="col">
          <div className="d-flex justify-content-center" style={{ paddingTop:'1rem' }} >
            <h1>Lista de contenedores</h1>
          </div>
          <div className="row">
            <div className="col-2"/>
            <div className="col-8">
              <br />
              <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Tipo de contenedor</th>
                        <th>Capacidad</th>
                        <th>Dirección</th>
                    </tr>
                </thead>
                <tbody>
                  <TableContainers containers={containers} />
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
