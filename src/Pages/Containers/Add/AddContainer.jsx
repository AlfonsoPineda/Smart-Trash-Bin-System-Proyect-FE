import { Component, useState } from "react";
import { useDispatch } from "react-redux";
import MapComponent from "../../../Components/Map/MapComponent";
import NavBar from "../../../Components/Navbar/NavBar";
import { changeId, changeType } from "../../../Components/Reducers/actions";
import store  from "../../../store";


export default function AddContainer({}){

      let [state, setState] = useState();
      state = store.getState().mapReducer;
      let [container, setContainer] = useState();
      container = store.getState().containersReducer;

      const dispatch = useDispatch();

      const handleChange = (event) =>{
        container.id = event.target.value;
        dispatch(changeId(container));
        setState({container: container})
      }
      const handleTypeChange = (event) =>{
        container.type = event.target.value;
        dispatch(changeType(container));
        setState({container: container})
      }
    return(
      <div className="row" >
        <NavBar />
        <br />
        <br />
        <div className="col">
          <div className="d-flex justify-content-center" style={{ paddingTop:'1rem' }} >
            <h1>Añadir contenedor</h1>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-6" style={{ paddingLeft:'2rem' }}>
                  <div className="select-group">
                    <select aria-label="Default select example" name="type" id="type" value={container.type} onChange={handleTypeChange}>
                      <option defaultValue>Tipo de contenedor</option>
                      <option value="1">Orgnánico</option>
                      <option value="2">Inorgnánico</option>
                      <option value="3">Vidrio</option>
                      <option value="4">Cartón</option>
                      <option value="5">Papel</option>
                      <option value="6">Baterías</option>
                    </select>
                  </div>
                </div>
                <div className="col-6" style={{ paddingLeft:'2rem' }}>
                  <div className="form__group field">
                      <input type="text" className="form__field" placeholder="contid" name="contid" id="contid" required value={container.id} onChange={handleChange} />
                      <label htmlFor="contid" className="form__label">Nombre del contenedor</label>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6" style={{ paddingLeft:'2rem' }}>
                  <div className="form__group field">
                      <input type="text" className="form__field" placeholder="Latitud" name="lat" id="lat" required value={state.lat}disabled  />
                      <label htmlFor="lat" className="form__label">Latitud</label>
                    </div>
                </div>
                <div className="col-6" style={{ paddingLeft:'2rem' }}>
                  <div className="form__group field">
                      <input type="text" className="form__field" placeholder="Longitud" name="lon" id="lon" value={state.lon} required disabled />
                      <label htmlFor="lon" className="form__label">Longitud</label>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12" style={{ paddingLeft:'2rem' }}>
                  <div className="form__group field">
                      <input type="text" className="form__field" placeholder="Dirección" name="dir" id="dir" value={state.direction}  required disabled />
                      <label htmlFor="dir" className="form__label">Dirección</label>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6" style={{ paddingLeft:'2rem' }}>
                  <div className="form__group field">
                      <input type="text" className="form__field" placeholder="Calle" name="str" id="str" value={state.str} required disabled />
                      <label htmlFor="str" className="form__label">Calle</label>
                    </div>
                </div>
                <div className="col-4" style={{ paddingLeft:'2rem' }}>
                  <div className="form__group field">
                      <input type="text" className="form__field" placeholder="Colonia" name="col" id="col" value={state.col} required disabled />
                      <label htmlFor="col" className="form__label">Colonia</label>
                    </div>
                </div>
                <div className="col-2">
                  <div className="form__group field">
                      <input type="text" className="form__field" placeholder="Numero" name="num" id="num" value={state.num} required disabled />
                      <label htmlFor="num" className="form__label">N°</label>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6" style={{ paddingLeft:'2rem' }}>
                  <div className="form__group field">
                      <input type="text" className="form__field" placeholder="Municipio/Alcaldía" name="mun" id="mun" value={state.mun} required disabled />
                      <label htmlFor="mun" className="form__label">Municipio/Alcaldía</label>
                    </div>
                </div>
                <div className="col-6" style={{ paddingLeft:'2rem' }}>
                  <div className="form__group field">
                      <input type="text" className="form__field" placeholder="Estado" name="state" id="state" required value={state.state} disabled />
                      <label htmlFor="state" className="form__label">Estado</label>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6" style={{ paddingLeft:'2rem' }}>
                  <div className="form__group field">
                      <input type="text" className="form__field" placeholder="Código postal" name="pc" id="pc" value={state.pc} required disabled />
                      <label htmlFor="pc" className="form__label">Código postal</label>
                    </div>
                </div>
                <div className="col-6" style={{ paddingLeft:'2rem' }}>
                  <div className="form__group field">
                      <input type="text" className="form__field" placeholder="País" name="country" id="country" value={state.country} required disabled />
                      <label htmlFor="country" className="form__label">País</label>
                    </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-3" />
                <div className="col-6" style={{ paddingLeft:'2rem' }}>
                  <button className="btn btn-primary access-btn" type="submit">Agregar contenedor</button>
                </div>
              </div>
            </div>
            <div className="col-6"  style={{ paddingRight:'2rem', paddingTop:'2rem' }}>
              <MapComponent isAdding={true} />
            </div>
          </div>
        </div>
      </div>
    );
}
