import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Products from './components/Products'
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App container-fluid p-0 m-0">
        <Nav />
        <Route path="/shop" component={Products} />
      </div>
    </Router>
  );
}

export default App;
