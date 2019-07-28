import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ForecastPage from './components/ForecastPage';
import HourlyPage from './components/HourlyPage';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/forecast" component={ForecastPage} />
      <Route exact path="/hourly" component={HourlyPage} />
      <Footer />
    </Router>
  );
}

export default App;
