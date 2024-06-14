import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Accomodation from './pages/accomodation';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/fiche-logement/:id" element={<Accomodation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;