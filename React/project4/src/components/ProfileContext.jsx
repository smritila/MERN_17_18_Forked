import React, { useEffect, useState } from "react";
import axios from "axios";

export let ProfilesContext = React.createContext();

export let ProfilesProvider = ({ children }) => {
  console.log(children);
  let [profiles, setProfiles] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setProfiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ProfilesContext.Provider value={profiles}>
      {children}
    </ProfilesContext.Provider>
  );
};
