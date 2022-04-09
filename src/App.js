import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="container">

      <Header />
      {/* <Route path='/' element={< />} /> */}
      <Footer />
    </div>
  );
}

export default App;
