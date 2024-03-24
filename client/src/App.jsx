import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
