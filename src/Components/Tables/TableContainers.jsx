import React from "react";
const TableContainers = (props) => {
return (
    props.containers.map((val, idx)=> {
        return (
            <tr >
                <td><p className="dark-text"> {props.containers[idx].id}</p></td>
                <td><p className="dark-text"> {props.containers[idx].name}</p></td>
                <td><p className="dark-text"> {props.containers[idx].type}</p></td>
                <td><p className="dark-text"> {props.containers[idx].capacity}</p></td>
                <td><p className="dark-text"> {props.containers[idx].direction}</p></td>
            </tr>
            )

    })
)
}
export default TableContainers;
