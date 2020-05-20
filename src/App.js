import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/react-portfolio" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
