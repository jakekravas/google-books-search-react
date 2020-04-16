import React from 'react';
import {BrowserRouter, HashRouter, Switch, Route} from "react-router-dom";
import './bootstrap.min.css';
import './App.css';
import Nav from "./components/Nav";
import Search from "./components/Search";
import Saved from "./components/Saved";

function App() {
  return (
    <HashRouter>
      <Nav/>
      <Switch>
        <div className="container">
          <Route exact path = {"/"} component={Search}/>
          <Route exact path = {"/saved"} component={Saved}/>
        </div>
      </Switch>
    </HashRouter>
  );
}

export default App;