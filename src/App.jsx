
import React from 'react';// Adjust the path based on your file structure
import Header from './Components/Header/Header';
import {   Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Service from './Components/Ourprogram/Services/Service';
import ContactUs from './Components/ContactUs/ContactUs';
import Dnote from './Components/Donate/Dnote';
import AmbulanceService from './Components/Home/Ambulance';
import CleanlinessProject from './Components/Home/Cleanliness';
import FreeFilteredWater from './Components/Home/Water';
import FoodDistribution from './Components/Home/FoodDistribution';
import EducationalFunds from './Components/Home/Education';
import BurialFunds from './Components/Home/Burial';
import Team from './Components/Team/Team';
import Financial from './Components/Financial/Financial';
import HistoryTrust from './Components/History/HistoryTrust';
import Mission from './Components/Mission/Mission';
import Joinus from './Components/Joinus/Joinus';
import Security from './Components/security/security';
import EidAlAdha from './Components/eiduladha/eiduladha';
import Marriage from './Components/marriage/marriage';
import Ourprogram from './Components/Ourprogram/Ourprogram';
function App() {
 

  return (
<div className="bg-gray-200">
      <Header />
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
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
          <Route path="/financial" element={<Financial/>} />
          <Route path="/history" element={<HistoryTrust/>} />
          <Route path="/mission" element={<Mission/>} />
          <Route path="/joinus" element={<Joinus/>} />
          <Route path="/security" element={<Security/>} />
          <Route path="/eiduladha" element={<EidAlAdha/>} />
          <Route path="/marriage" element={<Marriage/>} />
          <Route path="/ourprogram" element={<Ourprogram/>} />
        </Routes>
      <Footer />
        </div>
  );
}

export default App;
