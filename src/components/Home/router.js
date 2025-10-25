import React from 'react';
import Home from './home';
import Individual from '../Pokemon/individual';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Individual />} />
      </Routes>
    </Router>
  );
}
