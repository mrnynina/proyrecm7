import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Default from './routes/Default';
import Product from './routes/Product';
import LoginForm from './routes/LoginForm';
import Traductor from './routes/Traductor';
import './App.css';
function App() {
  return (
    <Router basename="proyrecm7" >
     
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/default">Default</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/loginform">LoginForm</Link></li>
          <li><Link to="/traductor">Traductor</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/default" element={<Default />} />
        <Route path="/product" element={<Product />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/traductor" element={<Traductor />} />
      </Routes>   
    </Router>


  );
}

export default App;
