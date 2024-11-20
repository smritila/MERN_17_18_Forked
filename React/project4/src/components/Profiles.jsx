import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { ProfilesContext } from "./ProfileContext";

function Profiles() {
  const profiles = useContext(ProfilesContext);

  function displayProfiles() {
    console.log(profiles);
    return profiles.map((profile, index) => {
      return (
        <tr key={index}>
          <td>
            <Link to={`/${profile.id}/${profile.name}`}>{profile.id}</Link>
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
