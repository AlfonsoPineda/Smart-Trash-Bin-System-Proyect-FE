import React, { Component } from 'react';
import NavBar from '../../Components/Navbar/NavBar';
import MapComponent from '../../Components/Map/MapComponent';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <div style={{ height: '100%', width: '100%', padding: '2rem' }}>
              <h1>Mapa de contenedores</h1>
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
