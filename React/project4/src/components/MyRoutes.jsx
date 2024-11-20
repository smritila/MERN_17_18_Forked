import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProfile from "./SingleProfile";
import Profiles from "./Profiles";
function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profiles />} />
        <Route path="/:id/:name" element={<SingleProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
