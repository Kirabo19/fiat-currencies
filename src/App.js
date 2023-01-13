import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './Components/Home/HomeContainer';
import DetailsContainer from './Components/Details/DetailsContainer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route path="/details/:id" element={<DetailsContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
