import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Men from "./components/Men";
import Women from "./components/Women";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <div className="App container-fluid p-0 m-0">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/women" component={Women} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <Route path="/shop/:gender/:category_id" component={Products} />
      </div>
    </Router>
  );
}

export default App;
