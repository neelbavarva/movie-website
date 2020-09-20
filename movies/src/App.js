import React from "react";
import "./App.css";
import About from "./components/about";
import { BrowserRoute, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/common/navbar";
import Top10 from "./components/top10";
import Login from "./components/login";
import Footer from "./components/common/footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/top10" component={Top10} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
