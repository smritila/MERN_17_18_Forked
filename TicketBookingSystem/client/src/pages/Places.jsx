import React from "react";
import Layout from "../components/Layout";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Places() {
  return (
    <Layout>
      <h3 className="display-4 text-center">Create Places</h3>
      <form className="">
        <div className="form-group">
          <lable for="">Place Name</lable>
          <input
            type="text"
            name="placeName"
            id="placeName"
            className="form-control"
          />
        </div>{" "}
        <div className="form-group">
          <label for="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <lable for="address">Address</lable>
          <input
            type="text"
            name="placeaddress"
            id="placeaddress"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <lable for="place-image">Image</lable>
          <input
            type="file"
            accept="image/**" // accept image with any url
            name="placeimage"
            id="placeimage"
            className="form-control"
          />
        </div>
      </form>
    </Layout>
  );
}

export default Places;
