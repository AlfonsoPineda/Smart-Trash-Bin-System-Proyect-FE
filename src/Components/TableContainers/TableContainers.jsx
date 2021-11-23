import React from "react";
const TableContainers = (props) => {
return (
    props.containers.map((val, idx)=> {
        return (
            <tr >
                <td><a href={"/Container/"+props.containers[idx].id}> {props.containers[idx].id}</a></td>
                <td><a href={"/Container/"+props.containers[idx].id}> {props.containers[idx].name}</a></td>
                <td><a href={"/Container/"+props.containers[idx].id}> {props.containers[idx].capacity}</a></td>
                <td><a href={"/Container/"+props.containers[idx].id}> {props.containers[idx].direction}</a></td>
            </tr>
            )

    })
)
}
export default TableContainers;
