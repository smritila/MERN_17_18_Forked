import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProfilesContext } from "./ProfileContext";

function SingleProfile() {
  const { id, name } = useParams();
  const profiles = useContext(ProfilesContext);
  function displaySingleProfile() {
    return profiles.map((profile) => {
      if (profile.id === parseInt(id)) {
        return (
          <div key={profile.id}>
            <h3>Name: {profile.name}</h3>
            <p>UserName: {profile.username}</p>
            <p>Email: {profile.email}</p>
            <p>
              Address: {profile.address.street} {profile.address.suite},{" "}
              {profile.address.city}
            </p>
            <p>Contact: {profile.phone}</p>
            <p>Website: {profile.website}</p>
          </div>
        );
      }
    });
  }
  return (
    <div>
      <h1>Welcome {name}</h1>
      {displaySingleProfile()}
    </div>
  );
}

export default SingleProfile;
