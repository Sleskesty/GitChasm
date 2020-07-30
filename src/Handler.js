import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Activecall from './activecall'
import Dialpad from './dialpad'
import Saved from './saved'
import AllContacts from "./contactsAll";
import Recent from './recentcalls'
import VM from './VMcall'
import Settings from './settings'
import CallSett from './incallsettings'
import'./App.css'


export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Dialpad">
            <Dialpad />
          </Route>
          <Route path="/InCall">
            <Activecall/>
          </Route>
          <Route path="/contacts">
            <AllContacts/>
          </Route>
          <Route path="/saved">
            <Saved/>
          </Route>
          <Route path="/recents">
            <Recent/>
          </Route>
          <Route path="/VM">
            <VM/>
          </Route>
          <Route path="/Settings1">
            <Settings/>
          </Route>
          <Route path="/CallSettings1">
            <CallSett/>
          </Route>
          <Route path="/">
            <FCC />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function FCC() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <a className="App-button" href='./Dialpad'>
            
          </a>
        </header>
      </div>
      </Router>
      )
  }