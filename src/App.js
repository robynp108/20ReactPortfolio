import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";

function App() {
  const styles = {
    display: "flex",
    minHeight: "100vh",
    padding: 5,
    flexDirection: "column",
    backgroundColor: "#D2B48C",
    bottom: "50px"
  }
  return (
    <Router>
      <div className="container" style={styles}>
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
