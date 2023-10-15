import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../modules/Login/login.component";
import Dashboard from "../modules/Dashboard/dashboard.component";
import Home from "../modules/HomePage/home.component";
import SignUp from "../modules/SignUp/sign-up.component";
import HomeLayout from "./home-layout.component";
import ProtectedRoute from "./protected-route.component";

const VentureRoutes = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<HomeLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default VentureRoutes;
