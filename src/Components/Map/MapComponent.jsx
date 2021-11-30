import React from "react";
import './Map.scss';
import{ GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import key from '../../Complements/Keys/MapsApi';
import "@reach/combobox/styles.css";
import mapStyles from "../../Complements/Styles/mapStyles";
import Search from "../Search/Search";
import store  from "../../store";
import { addAddress, addCont } from "../Reducers/actions";
import { useDispatch } from "react-redux";
import ContainersService from'../../Services/Containers';

const libraries = ["places"];

const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const state = store.getState();

const direction = state.mapReducer;
const containers = state.containersReducer;

const center = {
  lat: direction.lat,
  lng: direction.lon,
};
export default function MapComponent({isAdding, conts}) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
    libraries,
  });


  let [markers, setMarkers] = React.useState([]);
  let [selected, setSelected] = React.useState(null);
  const dispatch = useDispatch();
  markers = containers;

  //const unsubscribe = store.subscribe(()=> markers=containers)
  //unsubscribe()


  const onMapClick = React.useCallback((e) => {
    const getDirection = async () => {

      const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='+e.latLng.lat()+','+e.latLng.lng()+'&key='+key);
      const myJson = await response.json(); //extract JSON from the http response

      direction.lat=e.latLng.lat();
      direction.lon=e.latLng.lng();
      direction.direction = myJson.results[0].formatted_address;
      try{
        direction.str = myJson.results[0].address_components[1].long_name || undefined;
        direction.col = myJson.results[0].address_components[2].long_name || undefined;
        direction.num = myJson.results[0].address_components[0].long_name || undefined;
        direction.mun = myJson.results[0].address_components[3].long_name || undefined;
        direction.state = myJson.results[0].address_components[4].long_name || undefined;
        direction.pc = myJson.results[0].address_components[6].long_name || undefined;
        direction.country = myJson.results[0].address_components[5].long_name || undefined;
      }catch(exception_var){
        console.log(exception_var);
      }

      containers.lat=e.latLng.lat();
      containers.lon=e.latLng.lng();

      dispatch(addAddress(direction));
      dispatch(addCont(containers));
      location.reload();
    }
    getDirection();
    setMarkers((current) => [
      ...current,
      {
        //id: '', type: '', lat: '', lon: '', capacity: ''
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);
  }, []);
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return(
    <img src="./loading.gif" style={{width:"100%", height:"100%"}}></img>
  );

  if (isAdding) return(
    <div>
      <Search panTo={panTo} />
      <br />
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
          <Marker
            key={`${ markers.lat }-${ markers.lon }`}
            position={{ lat: markers.lat, lng: markers.lon }}
            onClick={() =>
            {
              setSelected(markers);
            }}
            icon={{
              url: `/trash.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lon }}
            onCloseClick={() =>
            {
              setSelected(null);
            }}
          >
            <div>
              <h4>
                Contenedor: {markers.id}
              </h4>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  )
  console.log(conts)
  return (
    <div>
      <Search panTo={panTo} />
      <br />
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {conts.map((val, idx) => (
          <Marker
            key={conts[idx].id}
            position={{ lat: parseFloat(conts[idx].lat), lng: parseFloat(conts[idx].lon) }}
            onClick={() =>
            {
              setSelected(conts[idx])
            }}
            icon={{
              url: `/trash.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: parseFloat(selected.lat), lng: parseFloat(selected.lon) }}
            onCloseClick={() =>
            {
              setSelected(null);
            }}
          >
            <div>
              <h4>
                Contenedor: #{selected.id}
              </h4>
              <h5>
                Nombre: {selected.name}
              </h5>
              <h5>
                Tipo: {selected.type}
              </h5>
              <h5>
                Capacidad: {selected.capacity}%
              </h5>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

