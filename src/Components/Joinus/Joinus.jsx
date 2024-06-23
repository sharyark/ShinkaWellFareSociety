import React from 'react';

const Joinus = () => {
  return (
    <div className="bg-gray-100 p-8 md:p-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Join Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          We are always looking for passionate individuals to join our mission. Whether you want to volunteer, donate, or become a member, your contribution will make a significant impact on our community.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          To donate and help us support the people in need, please contact us at:
        </p>
        <div className="text-lg text-gray-800 mb-6">
          <p className="font-bold">0300-9786788</p>
          <p className="font-bold">0331-2006300</p>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          Join us on social media to stay updated with our latest activities and initiatives:
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <a 
            href="https://www.facebook.com/shinkawelfaresociety" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Facebook
          </a>
          <a 
            href="https://www.youtube.com/shinkawelfaresociety" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            YouTube
          </a>
        </div>
        <div className="flex justify-center">
          <a 
            href="/" 
            className="bg-gray-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-600 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
