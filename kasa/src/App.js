import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';
import AppRoutes from './routes';

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
