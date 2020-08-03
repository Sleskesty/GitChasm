import React from 'react';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import './saved.css'

function Saved() {
  return (
    <Router>
    <div>
      <header className="saved-header">
        <a class='dialer-button' href='./Dialpad'>        
        </a>
        <a class='contact-button' href='./contacts'>   
          </a>
          <a class='recent-button' href='./recents'>         
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

export default Saved;