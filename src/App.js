import React from 'react';
import './App.css';
import { Router, Route} from 'react-router-dom';
import Login from './Component/Login.js';
import Signup from './Component/Signup.js';
import Home from './Component/home.js';
import { history } from "../src/utils/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/" component={Login}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/Signup" component={Signup}></Route>
        <Route path="/home" component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
