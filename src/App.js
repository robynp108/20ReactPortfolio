import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
// import Portfiolio from "./components/pages/Portfolio";
// import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
