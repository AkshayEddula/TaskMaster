import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../Css/Nav.css";
import { Home } from "./Routes/Home";
import { About } from "./Routes/About";
import { Tasks } from "./Routes/Tasks";
import { Contact } from "./Routes/Contact";
import { Calender } from "./Routes/Calender";
import { Templates } from "./Routes/Templates";
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

export const Nav = () => {
  const [nav_toggle, setnav_toggle] = useState(true);

  const toggleHandler = () => {
    setnav_toggle(nav_toggle ? false : true);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>Task Master</h1>
        </div>
        {nav_toggle ? (
          <HiBars3 onClick={toggleHandler} className="bar_icon" />
        ) : (
          <RxCross1 onClick={toggleHandler} className="Cross_icon " />
        )}
        <nav className={` ${nav_toggle ? "not_hidden" : "hidden"}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Tasks">Tasks</Link>
            </li>
            <li>
              <Link to="/Templates">Templates</Link>
            </li>
            <li>
              <Link to="/Calender">Calender</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Templates" element={<Templates />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};
