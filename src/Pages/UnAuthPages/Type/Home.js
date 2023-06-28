//Important React Dependencies
import React from "react";

// Import the styled components
import {} from "./HomeStyles";

//Import the Navbar
import Navbar from "../NavBar/Navbar";

// Importing the Link
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Type
      <button>
        <Link to="/Store">Store</Link>
        <Link to="/Leaderboard">Leaderboard</Link>
        <Link to="/Settings">Settings</Link>
      </button>
    </div>
  );
};

export default Home;
