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
        <Route path="/" element={<Categories />}>
          <Route path="/categories/" element={<Categories />} />
          <Route path="/categories/:category" element={<Categories />} />
        </Route>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
