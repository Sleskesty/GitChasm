import React from 'react';
import './contactsAll.css';
import {
  BrowserRouter as Router,

} from "react-router-dom";

function AllContacts() {
  return (
    <Router>
    <div>
      <header className="allcontacts-header">
        <a class='dialer-button' href='./Dialpad'>
          
        </a>
        <a class='saved-button' href='./saved'>         
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

export default AllContacts;