import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../Css/Main.css";
import { Nav } from "./Nav";

export const Main = () => {
  return (
    <div className="Main">
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  );
};
