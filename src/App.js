//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, AddProduct, AllOrders, Barcode, ECommerceListing } from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Router>
            <Navbar />
            <Routes>
                <Route exact  path='/' element={<Home />} />
                <Route exact path='/AddProduct' element={<AddProduct />} />
                <Route exact path='/AllOrders' element={<AllOrders />} />
                <Route exact path='/Barcode' element={<Barcode />} />
                <Route exact path='/ECommerceListing' element={<ECommerceListing />} />
            </Routes>
           </Router>
    </main>
  );
}

export default App;
