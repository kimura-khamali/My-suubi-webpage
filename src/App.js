import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import Footer from './Footer/index';
import About from './About';
import './App.css';
import Product from './Product';


  function App() {
    return (
      <div>
        <Navbar />
        <Landing/>
        <Product/>
        <About/>
        <Footer />
      </div>
    );
  }


export default App;