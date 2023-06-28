// Important React Dependendcies
import React from "react";
// Importing the router
import {
  BrowserRouter as Router,
  Routes,
  Redirect,
  Route,
} from "react-router-dom";

// Import the Styling
import "./App.css";

// Importing the components

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Hello} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
