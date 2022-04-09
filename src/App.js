import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';

import './App.css';

function App() {
  return (
    <div className="container">

      <Header />
      <Routes>
        <Route path="/" element={<Categories />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
