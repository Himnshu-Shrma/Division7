import './App.css';
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import ContactUs from './components/ContactUs';
import Home from './components/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

import Projects from './components/Projects';
import Blog from './components/Blog';
import Fireproofing from './components/Fireproofing';
import SprayFoam from './components/SprayFoam';
import SlabJacking from './components/SlabJacking';

export default function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path='/about' element={<AboutUs />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/contact' element={<ContactUs />} />
            <Route exact path='/services' element={<Services />} />
            <Route exact path='/fireproofing' element={<Fireproofing />} />
            <Route exact path='/slab-jacking' element={<SlabJacking />} />
            <Route exact path='/spray-foam-insulation' element={<SprayFoam />} />

          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
};

