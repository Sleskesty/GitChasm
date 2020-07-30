import React from 'react';
import './recentcalls.css';
import {
  BrowserRouter as Router,

} from "react-router-dom";

function Recent() {
  return (
    <Router>
    <div>
      <header className="recent-header">
          
        <a class='dialer-button' href='./Dialpad'>
          
        </a>
        <a class='saved-button' href='./saved'>         
        </a>
        <a class='contact-button' href='./contacts'>
          
          </a>
          <a class='VM-button' href='./VM'>         
        </a>
        <a class='sett-button' href='./Settings1'>         
        </a>
      </header>
    </div>
    </Router>
    )
}

export default Recent;