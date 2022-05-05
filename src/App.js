import { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offer/:_id" element={<Offer />}></Route>
        </Routes>
        <Footer title="Made by Adrien Callioni" />
      </Router>
    </div>
  );
};

export default App;
