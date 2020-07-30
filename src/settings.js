import React from 'react';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import './settings.css'

function Settings() {
  return (
    <Router>
    <div>
      <header className="sett-header1">
        <a class='back-button' href='./Dialpad'>
        
        </a>
        {/*<a class="dialer-button" href='./about'>
        </a> */}
      </header>
    </div>
    </Router>
    )
}

export default Settings;