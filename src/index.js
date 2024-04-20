import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
// Import des composants de chaque page
import Home from './pages/Home';
import About from './pages/About';
import Logements from './pages/Logements';
import Error from './pages/Error';

import Navbar from './composants/Navbar';
import Footer from './composants/Footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Logements />} />
            <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
