import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/MyEffect.css";

function MyEffect() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(event) {
    let id = document.getElementById("id").value;
    let email = document.getElementById("email").value;
    let inputObj = {
      userId: id,
      userEmail: email,
    };
    authenticateUser(inputObj, users);
    event.preventDefault();
  }
  function authenticateUser(inputObj, users) {
    const { userId, userEmail } = inputObj;
    for (let user of users) {
      if (userId == user.id && userEmail == user.email) {
        console.log(user);
      }
    }
  }
  return (
    <div>
      <h1>Fetching Data From API</h1>
      <form>
        <label htmlFor="id">ID</label>
        <input type="text" name="id" id="id" placeholder="Enter id" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter email" />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default MyEffect;
