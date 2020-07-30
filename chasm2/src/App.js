import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavLink className="App-button" to='/Dialpad' exact>
          _____
        </NavLink>
      </header>
    </div>
    </Router>
    )
}

export default App;
