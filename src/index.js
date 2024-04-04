import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logements';
import Error from './pages/Error';

import Navbar from './composants/home/Navbar';
import Footer from './composants/home/Footer';

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
            <Route path="/housing/:id" element={<Logement />} />
            <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
