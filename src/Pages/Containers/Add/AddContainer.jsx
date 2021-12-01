import { Component, useState } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch } from "react-redux";
import MapComponent from "../../../Components/Map/MapComponent";
import NavBar from "../../../Components/Navbar/NavBar";
import { changeId, changeType } from "../../../Components/Reducers/actions";
import store  from "../../../store";
import ContainersService from'../../../Services/Containers';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';


export default function AddContainer(props){

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

      const usage = ()=>{
        Swal.fire({
          title: '¿Cómo agrego un contenedor?',
          text: 'Para añadir un nuevo contenedor selecciona un tipo de conntenedor y rellenar el campo de "Nombre del contenedor". \n Para elegir una ubicación haz doble click sobre el mapa en la ubicación exacta donde desees tu contenedor. \n Puedes apoyarte del campo de "Buscar una localización" para obtener sugerencias de ubicaciones y cargar el mapa en la ubicación buscada. \n En caso de haber seleccionado la ubicación incorrecta haz doble click en el mapa sobre la ubicación deseada para cargar la nueva ubicación.',
          icon: 'info',
          confirmButtonText: 'Aceptar'
      });
      }

      const handleSubmit = () =>{
        console.log(container)
        console.log(state)
        var data = {
            lat: state.lat,
            lng: state.lon,
            fulladdress: state.direction,
            street: state.str,
            urbanity: state.col,
            num: state.num,
            neighborhood: state.mun,
            state: state.state,
            pc: state.pc,
            country: state.country,
            name: container.id,
            type: container.type,

        }
            ContainersService.addContainer(data).then(response => {
                if(response.status === 201){
                    Swal.fire({
                        title: 'Contenedor agregado exitosamente',
                        text: 'Registro exitoso',
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    });
                    sessionStorage.clear();

                    setTimeout(() => { window.location.replace('https://4e334dc7c263.ngrok.io/Home')}, 2000);
                }else if(response.status === 401){
                    Swal.fire({
                        title: 'Error',
                        text: response.data.message,
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    });
                }
            }).catch(e => {
                console.log(e)
                Swal.fire({
                    title: 'Error',
                    text: 'ocurrió un error',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            });
    }
    const params = useParams()
    if(params.id){
      return(
        <div className="row" >
          <NavBar />
          <br />
          <br />
          <div className="col">
            <div className="d-flex justify-content-center" style={{ paddingTop:'1rem' }} >
              <h1>Modificar contenedor  <button type="button" onClick={usage} style={{height:"30", border:'none'}}> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
  </svg></button> </h1>
  <h3>Para elegir una ubicación haz doble click sobre el mapa en la ubicación exacta donde desees tu contenedor.</h3>
            </div>
            <div className="row">
              <div className="col-6">
              <ValidatorForm onError={errors => console.log(errors)}
                  onSubmit={handleSubmit}>
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
              </ValidatorForm>
              </div>
              <div className="col-6"  style={{ paddingRight:'2rem', paddingTop:'2rem' }}>
                <MapComponent isAdding={true} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return(
      <div className="row" >
        <NavBar />
        <br />
        <br />
        <div className="col">
          <div className="d-flex justify-content-center" style={{ paddingTop:'1rem' }} >
            <h1>Añadir contenedor  <button type="button" onClick={usage} style={{height:"30", border:'none'}}> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg></button> </h1>
<br />

          </div>
<h4 style={{marginLeft:'1rem'}}>Para elegir una ubicación haz doble click sobre el mapa en la ubicación exacta donde desees tu contenedor.</h4>

          <div className="row">
            <div className="col-6">
            <ValidatorForm onError={errors => console.log(errors)}
                onSubmit={handleSubmit}>
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
            </ValidatorForm>
            </div>
            <div className="col-6"  style={{ paddingRight:'2rem', paddingTop:'2rem' }}>
              <MapComponent isAdding={true} />
            </div>
          </div>
        </div>
      </div>
    );
}
