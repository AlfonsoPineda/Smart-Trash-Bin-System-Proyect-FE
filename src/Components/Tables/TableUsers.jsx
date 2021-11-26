import React from "react";

const TableUsers = (props) => {
  return (
      props.users.map((val, idx)=> {
          return (
              <tr >
                  <td><a href={"/Container/"+props.users[idx].id}> {props.users[idx].name} {props.users[idx].lastName}</a></td>
                  <td><a href={"/Container/"+props.users[idx].id}> {props.users[idx].email}</a></td>
                  <td><a href={"/Container/"+props.users[idx].id}> {props.users[idx].phone}</a></td>
                  <td><a href={"/Container/"+props.users[idx].id}> {props.users[idx].type}</a></td>
              </tr>
              )

      })
  )
}
export default TableUsers;
