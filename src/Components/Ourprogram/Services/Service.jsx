import React from 'react';
import { Link } from 'react-router-dom';
import { FaAmbulance, FaWater, FaSplotch, FaUtensils, FaGraduationCap, FaBed } from 'react-icons/fa';

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

const Services = () => {
  return (
    <section className="container mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <Link key={index} to={service.link} className="service flex flex-col items-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200">
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-center">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
