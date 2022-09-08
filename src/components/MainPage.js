import React from "react";
import Home from "./HomePage";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";

export const MainPage = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  );
};
