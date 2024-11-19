import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProfile from "./SingleProfile";
import Profiles from "./Profiles";
function MyRoutes() {
  return (
    <BrowserRouter>
      <Profiles />
      <Routes>
        <Route path="/:id" element={<SingleProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
