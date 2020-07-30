import React from 'react';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import "."

function dialpad() {
  return (
    <Router>
    <div>
      <header className="call-header">
        <a class='call-button' href='./Dialpad'>
        
        </a>
        <a class='call-sett-button' href='./Dialpad'>
        
        </a>
        {/*<a class="dialer-button" href='./about'>
        </a> */}
      </header>
    </div>
    </Router>
    )
}

export default dialpad;