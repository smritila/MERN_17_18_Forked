import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import axios from "axios";

function Home() {
  const [places, setPlace] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/places/getplaces")
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        setPlace(res.data.places);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function displayPlaces() {
    return places.map((place, index) => {
      return (
        <div key={index} className="col border border-primary m-2 p-2">
          <h2>{place.placeName}</h2>
          <p>{place.placeDescription}</p>
          <p>{place.placeAddress}</p>
          <Link to={`/places/${place._id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      );
    });
  }

  return (
    <Layout>
      <h2 className="fw-semibold text-center text-warning p-2">
        {" "}
        Book your next trip
      </h2>
      {/* fetch the places from the data into home page */}
      {/* {displayPlaces()} */}
      <div className="container m-2">
        <div className="row">{displayPlaces()}</div>
      </div>
    </Layout>
  );
}

export default Home;
