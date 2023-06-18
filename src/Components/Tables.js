import React from "react";
import "./Tables.css";
const Tables = (props) => {
  return (
    <div>
      <h2>List of Registered Name</h2>
      <div class="table-wrapper">
        <table class="table-bg">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>password</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.fullname}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneno}</td>
                  <td>{user.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
