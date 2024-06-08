





import React from 'react';

const AboutUs = () => {
  return (
    <section className="container mx-auto my-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 mt-12">About Our Trust</h2>

      {/* Accident Details Section */}
      <section className="mb-12">
        <p className="text-xl text-gray-900 leading-relaxed">
      <strong> Shinka Welfare Society </strong>  is a non-profit charitable organization dedicated to uplifting our community. Registered since 2019, we conduct emergency relief operations during natural or man-made disasters. We also focus on long-term healthcare programs, community support, and education & poverty alleviation initiatives. Our journey began with a few kind-hearted individuals in our village, determined to help the less fortunate, particularly by providing an effective ambulance service, RO filtered water, sanitation, and many more essential services.    </p>
        <br />
        <a href="/about">read more</a>
      </section>

      {/* Mission Statement Section */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-2 text-center">Mission Statement</h3>
        <p className="text-lg text-gray-900 leading-relaxed">
        Our mission is to protect the people of Shinka from any disaster, violence, or hardship. We strive to create a safe, supportive, and thriving community by providing essential services and responding promptly to emergencies. Our aim is to ensure that the less fortunate and deserving individuals have access to basic life amenities, promoting overall well-being and security within our community. </p>
      </section>

      {/* History and Background Section */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-2 text-center">History and Background</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Founded in 2018 by Saeed Khan, our trust has been at the forefront of community development in Shinka. Over the years, we have initiated several successful projects that have positively impacted thousands of lives.
        </p>
        <br />
        <a href="/history">read more</a>
      </section>

      {/* Core Values Section */}
      {/* <section className="mb-12">
        <h3 className="text-xl font-semibold mb-2 text-center">Core Values</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed inline-block text-left">
          <li>Integrity</li>
          <li>Compassion</li>
          <li>Sustainability</li>
          <li>Community</li>
          <li>Empowerment</li>
        </ul>
      </section> */}

      {/* Impact Section */}
      {/* <section className="mb-12">
        <h3 className="text-xl font-semibold mb-2 text-center">Impact</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed inline-block text-left">
          <li>Provided clean water to over 500 families</li>
          <li>Built two schools</li>
          <li>Facilitated healthcare services for 1,000 villagers</li>
        </ul>
      </section> */}

      {/* Gallery Section */}
      {/* <section className="mb-12">
        <h3 className="text-xl font-semibold mb-2 text-center">Gallery</h3>
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
      </section> */}
    </section>
  );
};

export default AboutUs;