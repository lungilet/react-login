import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login.component";
import Home from './components/home.component';

function App() {

  return (<Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </div></Router>
  );
}

export default App;
