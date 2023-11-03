import React from "react";

import {
  Route, BrowserRouter as Router, Routes, Redirect,
} from 'react-router-dom';

import NavBar from "./components/NavBar";
import Home from './components/Home';
import PubList from './components/PubList';
import Pub from "./components/Pub";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column h-100 lead">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pubs" element={<PubList />} />
          <Route path="/pubs/:url" element={<Pub />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
