import React from "react";

import {
  Route, BrowserRouter as Router, Routes, Redirect,
} from 'react-router-dom';

import Home from './components/Home';
import PubList from './components/PubList';
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pubs" element={<PubList />} />
      </Routes>
    </Router>
  );
}

export default App;
