import { Component } from "react";
import NavBar from "../../../Components/Navbar/NavBar";
import TableContainers from "../../../Components/Tables/TableContainers";
import TableUsers from "../../../Components/Tables/TableUsers";
import store from "../../../store";
import UsersService from'../../../Services/Users';


export default class UserList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      users:[]
    };
  }
  getUsers= () =>{
    let { users } = this.state;

    UsersService.getUsers().then(response => {
      if(response.status === 200){
        users= response.data.users
        this.setState({users})
        console.log(state)

      }else if(response.status === 401){
      }
      }).catch(e => {

      });

      }
  render(){
    if(this.state.users.length==0){
      this.getUsers();
    }
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
                      <th>Posición</th>
                      <th>Educación</th>
                      <th>Salario</th>
                    </tr>
                </thead>
                <tbody>
                  <TableUsers users={this.state.users} />
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
