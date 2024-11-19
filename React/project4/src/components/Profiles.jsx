import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Profiles() {
  const [profiles, setProfiles] = useState([]);
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      setProfiles(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  function displayProfiles() {
    console.log(profiles);
    return profiles.map((profile, index) => {
      return (
        <tr key={index}>
          <td>
            <Link to={`/${profile.id}`}>{profile.id}</Link>
          </td>
          <td>{profile.name}</td>
          <td>{profile.email}</td>
        </tr>
      );
    });
  }
  return (
    <div>
      <h1>Profiles Page</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{displayProfiles()}</tbody>
      </table>
    </div>
  );
}

export default Profiles;
