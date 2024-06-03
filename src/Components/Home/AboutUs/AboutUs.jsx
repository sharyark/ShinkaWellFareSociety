import React from 'react';

const AboutUs = () => {
  return (
    <section className="container mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">About Our Trust</h2>
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
        <div className="mb-6 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a dedicated welfare trust working to improve the lives of villagers in Shinka. Our mission is to provide essential services, support, and opportunities to enhance the well-being and prosperity of the community.
          </p>
        </div>
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Mission Statement</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to empower and uplift the community through education, healthcare, and sustainable development projects.
          </p>
        </div>
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold mb-2">History and Background</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded in 2018 by Saeed khan, our trust has been at the forefront of community development in Shinka. Over the years, we have initiated several successful projects that have positively impacted thousands of lives.
          </p>
        </div>
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Core Values</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed inline-block text-left">
            <li>Integrity</li>
            <li>Compassion</li>
            <li>Sustainability</li>
            <li>Community</li>
            <li>Empowerment</li>
          </ul>
        </div>
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Impact</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed inline-block text-left">
            <li>Provided clean water to over 500 families</li>
            <li>Built two schools</li>
            <li>Facilitated healthcare services for 1,000 villagers</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a href="link1" className="group block">
            <img src="image1.jpg" alt="Volunteers distributing supplies" className="w-full h-64 object-cover rounded-lg shadow-md transform group-hover:scale-105 transition duration-300" />
          </a>
          <a href="link2" className="group block">
            <img src="image2.jpg" alt="Newly built school" className="w-full h-64 object-cover rounded-lg shadow-md transform group-hover:scale-105 transition duration-300" />
          </a>
          <a href="link3" className="group block">
            <img src="image3.jpg" alt="Community event" className="w-full h-64 object-cover rounded-lg shadow-md transform group-hover:scale-105 transition duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;