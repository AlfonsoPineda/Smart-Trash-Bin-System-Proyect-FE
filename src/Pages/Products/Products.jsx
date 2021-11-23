import React, { Component } from 'react';
import NavBar from '../../Components/Navbar/NavBar';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="wrapper container">
        <NavBar />
        <div className="row d-flex  ">
          <div className="col-12" style={{ padding: '1rem' }}>
            <div style={{ display: 'inline-block', width: 'auto' }}>
              <div className="select-group">
                <label htmlFor="Order">
                  &nbsp; Ordenar por:
                  <select name="Order" id="Order">
                    <option value="relevance">Importancia</option>
                    <option value="MaxPrice">Precio (mayor)</option>
                    <option value="MinPrice">Precio (menor)</option>
                  </select>
                </label>
              </div>
            </div>
            <div style={{ display: 'inline-block' }}>
              <div className="select-group">
                <label htmlFor="Order">
                  &nbsp; Ordenar por:
                  <select name="Order" id="Order">
                    <option value="relevance">Importancia</option>
                    <option value="MaxPrice">Precio (mayor)</option>
                    <option value="MinPrice">Precio (menor)</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex  ">
          <div className="col-2" />
          <div className="col-8">
            <h1>bdeb</h1>
          </div>
          <div className="col-2" />
        </div>
      </div>
    );
  }
}

export default Products;
