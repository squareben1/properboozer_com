
import { React, useState, useEffect, useContext } from 'react';

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
  const [pubs, setPubs] = useState([])

  const getPubs = async () => {
    const res = await fetch('http://localhost:8000/pubs')
    const resPubs = await res.json()
    jsonisePubJsonFields(resPubs)

    console.log("resPubs: ", resPubs)

    setPubs(resPubs)
  }

  useEffect(() => {
    getPubs()
  }, [])

  const jsonisePubJsonFields = (pubRes) => {
    // Parse JSON objects stored as strings in DB.
    for (let pub of pubRes) {
      pub.images = JSON.parse(pub.images)
      pub.top_points = JSON.parse(pub.top_points)
    }

  }

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
