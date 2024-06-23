import React from 'react';

const Mission = () => {
  return (
    <div className="bg-gray-100 p-8 md:p-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Mission</h1>
        <p className="text-lg text-gray-600 mb-6">
          At Shinka Welfare Society, our mission is to uplift our community through dedicated service and support. Established in 2019, we are a non-profit organization committed to providing emergency relief during natural or man-made disasters and focusing on long-term healthcare, community support, education, and poverty alleviation initiatives.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our journey began with a tragic incident that highlighted the critical need for accessible emergency services in our village. Motivated by this event, we have grown from a small group of kind-hearted individuals into a robust organization offering a wide range of services. These include ambulance services, cleanliness drives, school bus services, filtered water supply, burial funds, educational support, food distribution during Ramadan, and more.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          We adhere to a 100% donation policy, ensuring that all contributions go directly to our programs and services. Our goal is to provide essential life amenities to the poor and less fortunate, enabling them to lead healthier, more secure lives. By working together with our community, we strive to create a brighter, more equitable future for all.
        </p>
        <div className="flex justify-center">
          <a 
            href="/joinus" 
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mission;
