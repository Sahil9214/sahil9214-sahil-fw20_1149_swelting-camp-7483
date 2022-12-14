import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import AllCompanies from "../Pages/AllCompanies";
import EmpoyeeLogin from "../Pages/EmpoyeeLogin";
const AllRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/allCompanies" element={<AllCompanies/>} />
        <Route path="/employee" element={<EmpoyeeLogin/>} />
      </Routes>
    </div>
  );
};

export default AllRouters;
