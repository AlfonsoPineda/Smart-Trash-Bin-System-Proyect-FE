import { Component, useState } from "react";
import NavBar from "../../../Components/Navbar/NavBar";
import TableContainers from "../../../Components/Tables/TableContainers";
import store from "../../../store";
import ContainersService from'../../../Services/Containers';
import { useDispatch } from "react-redux";
import { getCont } from "../../../Components/Reducers/actions";
import { render } from "@testing-library/react";

const cont= store.getState().containersReducer;

export default class ContainerList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      containers:[]
    };
  }

  getConts = () =>{
    let { containers } = this.state;

    ContainersService.getContainers().then(response => {
      if(response.status === 201){
        containers= response.data.containers
        this.setState({containers})
        console.log(state)

      }else if(response.status === 401){
      }
      }).catch(e => {

      });

      }

    render(){
      if(this.state.containers.length==0){
        this.getConts();
      }
      console.log(this.state)
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
              <table className="table">
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
                  <TableContainers containers={this.state.containers} />
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
