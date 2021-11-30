import React from "react";

const TableUsers = (props) => {
  return (
      props.users.map((val, idx)=> {
          return (
              <tr >
                  <td><a href={"/User/"+props.users[idx].id} className="dark-text"> {props.users[idx].name} {props.users[idx].lastName}</a></td>
                  <td><a href={"/User/"+props.users[idx].id} className="dark-text"> {props.users[idx].email}</a></td>
                  <td><a href={"/User/"+props.users[idx].id} className="dark-text"> {props.users[idx].phone}</a></td>
                  <td><a href={"/User/"+props.users[idx].id} className="dark-text"> {props.users[idx].utype}</a></td>
                  <td><a href={"/User/"+props.users[idx].id} className="dark-text"> {props.users[idx].position}</a></td>
                  <td><a href={"/User/"+props.users[idx].id} className="dark-text"> {props.users[idx].education}</a></td>
                  <td><a href={"/User/"+props.users[idx].id} className="dark-text"> {props.users[idx].income}</a></td>
              </tr>
              )

      })
  )
}
export default TableUsers;
