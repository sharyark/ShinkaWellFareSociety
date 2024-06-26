import React from 'react';
import Corusel from './Corusel/Corusel';
import { FaAmbulance, FaWater, FaSplotch, FaUtensils, FaGraduationCap, FaBed } from 'react-icons/fa';
import AboutUs from './AboutUs/AboutUs';
import ContactNumber from './ContactNumber';

// Define service data
const servicesData = [
  {
    icon: <FaAmbulance className="text-5xl text-blue-500 mb-4" />,
    title: "Ambulance Service",
    description: "We provide free ambulance services for emergencies and medical transport.",
    link: "/abulance"
  },
  {
    icon: <FaWater className="text-5xl text-blue-500 mb-4" />,
    title: "Free Filtered Water",
    description: "Access to clean and safe drinking water for everyone.",
    link: "/water"
  },
  {
    icon: <FaSplotch className="text-5xl text-blue-500 mb-4" />,
    title: "Cleanliness Project",
    description: "Our cleanliness project aims to keep our community clean and hygienic.",
    link: "/cleanliness"
  },
  {
    icon: <FaUtensils className="text-5xl text-blue-500 mb-4" />,
    title: "Food Distribution",
    description: "Providing food to those in need through various distribution programs.",
    link: "/food"
  },
  {
    icon: <FaGraduationCap className="text-5xl text-blue-500 mb-4" />,
    title: "Educational Funds",
    description: "Supporting education through scholarships and funding for students.",
    link: "/educational"
  },
  {
    icon: <FaBed className="text-5xl text-blue-500 mb-4" />,
    title: "Burial Funds",
    description: "Assistance for funeral and burial expenses for families in need.",
    link: "/burial"
  }
];

function Home() {
  return (
    <>
      <ContactNumber />

      <Corusel />
      <AboutUs />

      <section className="container mx-auto my-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <a key={index} href={service.link} className="service flex flex-col items-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200">
              {service.icon}
              <h3 className="text-xl font-semibold cursor-pointer underline hover:text-blue-700">{service.title}</h3>
              <p className="text-center">{service.description}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
