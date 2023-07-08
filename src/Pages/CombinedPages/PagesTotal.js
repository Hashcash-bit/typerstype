// Important React Dependencies
import React from "react";

// Routing Import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing the Navbar
import Navbar from "../UnAuthPages/NavBar/Navbar";
import Home from "../UnAuthPages/Type/Home";
import Store from "../UnAuthPages/Store/Store";
import Leaderboard from "../UnAuthPages/Leaderboard/Leaderboard";
import Settings from "../UnAuthPages/Setting/Settings";


const PagesTotal = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/Store" Component={Store} exact />
        <Route path="/Leaderboard" Component={Leaderboard} exact />
        <Route path="/Settings" Component={Settings} exact />
        <Route path="/LogIn" Component={Login} exact />
        <Route path="/SignUp" Component={Signup} exact />
      </Routes>
    </div>
  );
};

export default PagesTotal;
