import React from 'react';
import './dialpad.css';
import './activecall.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";


function dialpad() {
  return (
    <Router>
    <div>
      <header className="dialpad-header">
        <a class='dialpad-button' href='./InCall'>
        
        </a>
        <a class='call-button' href='./contacts'>
          
        </a>
        <a class='saved-button' href='./saved'>         
        </a>
        <a class='recent-button' href='./recents'>         
        </a>
        <a class='VM-button' href='./VM'>         
        </a>
      </header>
    </div>
    </Router>
    )
}

export default dialpad;