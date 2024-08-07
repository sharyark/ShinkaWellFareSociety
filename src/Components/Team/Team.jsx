import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dilnawaz from './dilnawaz.jpg';
import saad from './saad.jpeg';
import shabirmehmood from './shabirmehmood.jpg';
import saeed from './saeed.png';
import akhter from './akhter.png'

const teamMembers = [
  { name: "Dil Nawaz", title: "Saddar", imgSrc: dilnawaz },
  { name: "Shabeer Mehmood", title: "Naib Saddar", imgSrc: shabirmehmood },
  { name: "Saeed Ahmed Khan", title: "Founder&Financial Secretary", imgSrc: saeed },
  { name: "Muhammad Saad", title: " General Secretary", imgSrc: saad },
  { name: "Muhammad akhter", title: " Secretary of Public affairs", imgSrc: akhter  },
  // Add more members as needed
];

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6">
      <div className="text-center mb-12">
        <h1 className="mt-10 text-4xl font-bold mb-4">Shinka Welfare Pakistan Team</h1>
        <div className="mt-10 text-xl text-gray-1000 space-y-4">
          <p>
            Shinka Welfare is a team of dedicated and passionate people who are working voluntarily<br />
            for the welfare of needy and deserving people in village Shinka.<br />
            Through their struggle, hard work, and commitment, the services of Shinka Welfare<br />
            have been recognized and appreciated by all community members, donors, and those in need.
          </p>
          <p>
            Shinka Welfare is recognized for its transparent process of helping the deserving<br />
            without any ulterior motive, but with the fervor for the cause of serving humanity only.<br />
            Their selfless and unconditional service is of great value<br />
            and well appreciated by all community members and the Shinka Welfare Foundation.
          </p>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <Slider {...settings} className="px-4 ">
        {teamMembers.map((member, index) => (
          <div key={index} className="p-4 text-center">
            <img className="w-40 h-40 rounded-md mx-auto mb-4" src={member.imgSrc} alt={`${member.name}'s picture`} />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;
