
import React from 'react';// Adjust the path based on your file structure
import Header from './Components/Header/Header';
import {   Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Service from './Components/Services/Service';
import ContactUs from './Components/ContactUs/ContactUs';
import Dnote from './Components/Donate/Dnote';
import AmbulanceService from './Components/Home/Ambulance';
import CleanlinessProject from './Components/Home/Cleanliness';
import FreeFilteredWater from './Components/Home/Water';
import FoodDistribution from './Components/Home/FoodDistribution';
import EducationalFunds from './Components/Home/Education';
import BurialFunds from './Components/Home/Burial';
import Team from './Components/Team/Team';


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
          <Route path="/abulance" element={<AmbulanceService/>} />
          <Route path="/cleanliness" element={<CleanlinessProject/>} />
          <Route path="/water" element={<FreeFilteredWater/>} />
          <Route path="/food" element={<FoodDistribution/>} />
          <Route path="/educational" element={<EducationalFunds/>} />
          <Route path="/burial" element={<BurialFunds/>} />
          <Route path="/team" element={<Team/>} />
        </Routes>
      <Footer />
        </div>
  );
}

export default App;
