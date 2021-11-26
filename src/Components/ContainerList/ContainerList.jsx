import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const ContainerList = (props) =>{
  return(

    props.containers.map((val, idx)=> {
      if( props.containers[idx].capacity<=20){
        var color = "rgb(109, 199, 0)";
      }else if( props.containers[idx].capacity<=75){
        var color = "rgb(246, 217, 0)";
      }else{
        var color= 'rgb(255, 15, 75)';
      }
      const contdata = {
        labels: [
          'Ocupado',
          'Disponible',
        ],
        datasets: [{
          label: 'Capacity',
          data: [ props.containers[idx].capacity,  100-props.containers[idx].capacity  ],
          backgroundColor: [
            color,
            'rgb(192,192,192)',
          ],
          hoverOffset: 4
        }]
      };
    return(
      <div>
        <div className="row">
          <div className="col-8">
            <br />
            <h2>Contenedor #{props.containers[idx].id}</h2>
            <h4>Nombre: {props.containers[idx].name}</h4>
            <h4>Dirección: {props.containers[idx].direction}</h4>
            <h4>Tipo de contenedor: {props.containers[idx].type}</h4>
          </div>
          <div className="col-4">
            <Doughnut data={contdata} />
          </div>
        </div>
        <br />
      </div>
    );
    })
    )
}

export default ContainerList;
