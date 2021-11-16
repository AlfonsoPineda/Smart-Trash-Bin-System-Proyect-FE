import React, { Component } from 'react';
import NavBar from '../../Components/Navbar/NavBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div clasName="wrapper container">
        <NavBar />
        <div className="row d-flex justify-content-center">
          <h1>Home Works!</h1>
        </div>
      </div>
    );
  }
}

export default Home;
