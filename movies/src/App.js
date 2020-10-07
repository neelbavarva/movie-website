import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/about';
import {BrowserRoute, Route , Switch} from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Top10 from './components/top10';
import Login from './components/login';
import Signup from './components/signup';
import Demo from './components/demo';

function App() {
  return (
    <div>
      <div >
        <Navbar />
        <Switch>
          <Route path="/top10" component={Top10} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/demo" component={Demo} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
