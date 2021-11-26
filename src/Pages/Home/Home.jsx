import React, { Component } from 'react';
import NavBar from '../../Components/Navbar/NavBar';
import MapComponent from '../../Components/Map/MapComponent';
import ContainerList  from '../../Components/ContainerList/ContainerList'
import store from '../../store';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const stateStore = store.getState();
    let containers = stateStore.containersReducer.containers;
    return (
      <div>
        <NavBar />
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div style={{ height: '100%', width: '100%', padding: '2rem' }}>
              <h1>Dashboard</h1>
              <div className="row">
              <div className="col-6" style={{ height:'55rem', msOverflowY:'scroll' }}>
                <ContainerList containers={containers} />
              </div>
                <div className="col-6">
                  <MapComponent />
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
