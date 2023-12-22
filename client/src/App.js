
import { React, useState, useEffect, useContext } from 'react';

import {
  Route, BrowserRouter as Router, Routes, Redirect,
} from 'react-router-dom';

import context from "./context/context"
import NavBar from "./components/NavBar";
import Home from './components/Home';
import PlaceList from './components/PlaceList';
import Place from "./components/Place";
import './App.css';

function App() {
  const [pubs, setPubs] = useState([])
  const [museums, setMuseums] = useState([])
  // const [places, setPlaces] = useState([])

  const getPubs = async () => {
    const res = await fetch('http://localhost:8000/pubs')
    const resPubs = await res.json()
    jsonisePubJsonFields(resPubs)

    console.log("resPubs: ", resPubs)

    setPubs(resPubs)
  }

  const getMuseums = async () => {
    const res = await fetch('http://localhost:8000/museums')
    const resMuseums = await res.json()
    jsonisePubJsonFields(resMuseums)

    console.log("resMuseums: ", resMuseums)

    setMuseums(resMuseums)
  }

  useEffect(() => {
    getPubs()
    getMuseums()
  }, [])

  const jsonisePubJsonFields = (placeRes) => {
    // Parse JSON objects stored as strings in DB.
    console.log("jsonise:", placeRes)
    for (let place of placeRes) {
      place.images = JSON.parse(place.images)
      place.top_points = JSON.parse(place.top_points)
    }
  }

  const { Provider } = context

  return (
    <Provider value={{ pubs, museums }}>
      <Router>
        <div className="App d-flex flex-column h-100 lead">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pubs" element={<PlaceList place_type={"pubs"} />} />
            <Route path="/pubs/:url" element={<Place place_type={"pubs"} />} />
            <Route exact path="/museums" element={<PlaceList place_type={"museums"} />} />
            <Route path="/museums/:url" element={<Place place_type={"museums"} />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
