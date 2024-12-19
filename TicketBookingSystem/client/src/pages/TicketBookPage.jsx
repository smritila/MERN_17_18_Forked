import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Notification from "../components/Notification";

function TicketBookPage() {
  const [place, setPlace] = useState(null);
  const [user, setUser] = useState("");
  const [from, setFrom] = useState("");
  const [seats, setSeats] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/places/getplace/${id}`)
      .then((res) => {
        console.log(res.data.place);
        setPlace(res.data.place);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const resetForm = () => {
    setUser("");
    setFrom("");
    setSeats("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/tickets/book", {
        userName: user,
        departure: from,
        destination: place.placeName,
        seats,
      });
      setNotificationMessage(response.data.message);
      setNotificationType("success");
      resetForm();
    } catch (error) {
      const defaultErrorMessage = "Error booking ticket. Please try again!!";
      const errorMessage = error.response?.data?.message || defaultErrorMessage;
      setNotificationMessage(errorMessage);
      setNotificationType("error");
      console.log(error);
    }
  };
  return (
    <Layout>
      {notificationMessage && (
        <Notification type={notificationType} message={notificationMessage} />
      )}
      <h1 className="fw-light text-center p-3">
        Tickets to {place !== null ? place.placeName : ""}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center flex-column align-items-center"
      >
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            User Name
          </label>
          <input
            type="text"
            placeholder="User name"
            className="form-control"
            value={user}
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            From
          </label>
          <input
            type="text"
            placeholder="from"
            className="form-control"
            value={from}
            onChange={(event) => {
              setFrom(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Seats
          </label>
          <input
            type="text"
            placeholder="number of seats"
            className="form-control"
            value={seats}
            onChange={(event) => {
              setSeats(event.target.value);
            }}
          />
        </div>
        <input type="submit" className="btn btn-success p-2 m-2" />
      </form>
    </Layout>
  );
}

export default TicketBookPage;
