
import { React, useState, useEffect } from 'react';

import {
  Route, BrowserRouter as Router, Routes, Redirect,
} from 'react-router-dom';

import context from "./context/context"
import NavBar from "./components/NavBar";
import Home from './components/Home';
import PubList from './components/PubList';
import Pub from "./components/Pub";
import './App.css';

function App() {
  // api call on load
  const [pubs, setPubs] = useState([])

  const getpubs = async () => {
    const res = await fetch('http://localhost:8000/pubs')
    const resPubs = await res.json()
    console.log(resPubs[0])
    setPubs(resPubs)
  }

  useEffect(() => {
    console.log("useEffect ran")
    getpubs()
  }, [])

  const { Provider } = context

  return (
    <Provider value={pubs}>
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
    </Provider>
  );
}

export default App;
