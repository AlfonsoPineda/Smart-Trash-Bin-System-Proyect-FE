import React, { Component } from 'react';
import NavBar from '../../Components/Navbar/NavBar';
import MapComponent from '../../Components/Map/MapComponent';
import ContainerList  from '../../Components/ContainerList/ContainerList'
import ContainersService from'../../Services/Containers';

class Home extends Component {
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
  render() {
    if(this.state.containers.length==0){
      this.getConts();
    }
    return (
      <div>
        <NavBar />
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div style={{ height: '100%', width: '100%', padding: '2rem' }}>
              <h1>Dashboard</h1>
              <div className="row">
              <div className="col-6" style={{ height:'55rem', msOverflowY:'scroll' }}>
                <ContainerList containers={this.state.containers} />
              </div>
                <div className="col-6">
                  <MapComponent conts={this.state.containers}/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
