import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import AppRoutes from './components/routes';

import "./assets/constants/global.scss";


function App() {
  return (
    <Router>
      <div className='main'>
        <Navbar />
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
