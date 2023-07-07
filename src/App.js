// Important React Dependendcies
import React from "react";

// Importing the router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import the Styling
import "./App.css";

// Importing the Navbar
import Navbar from "./Pages/UnAuthPages/NavBar/Navbar";

// Importing the components
import Home from "./Pages/UnAuthPages/Type/Home";
import Store from "./Pages/UnAuthPages/Store/Store";
import Leaderboard from "./Pages/UnAuthPages/Leaderboard/Leaderboard";
import Settings from "./Pages/UnAuthPages/Setting/Settings";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/Store" Component={Store} exact />
          <Route path="/Leaderboard" Component={Leaderboard} exact />
          <Route path="/Settings" Component={Settings} exact />
        </Routes>
    </div>
  );
}

export default App;
