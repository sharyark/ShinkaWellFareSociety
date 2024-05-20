
import React from 'react';// Adjust the path based on your file structure
import Header from './Components/Header/Header';
import {   Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Service from './Components/Services/Service';
import ContactUs from './Components/ContactUs/ContactUs';
import Dnote from './Components/Donate/Dnote';


function App() {
 

  return (
<div className="bg-gray-200">
      <Header />
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/donate" element={<Dnote/>} />
        </Routes>
      <Footer />
        </div>
  );
}

export default App;
