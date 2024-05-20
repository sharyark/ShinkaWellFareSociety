import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from "./logo.jpeg";
import { Bars3Icon } from "@heroicons/react/24/outline";

export const ABOUT = [
  { name: "Mission Statement", link: "#" },
  { name: "Team", link: "#" },
  { name: "History", link: "#" },
];
export const SERVICES = [
  { name: "Our Programs", link: "#" },
  { name: "Success Stories", link: "#" },
  { name: "Blog", link: "#" },
  { name: "Events", link: "#" },
  { name: "Volunteer Opportunities", link: "#" },
];
export const CONTACT = [
  { name: "Facebook", link: "#" },
  { name: "Instagram", link: "#" },
  { name: "YouTube", link: "#" },
];

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();

  const linksvalue = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "About",
      submenu: ABOUT,
    },
    {
      name: "Services",
      submenu: SERVICES,
    },
    {
      name: "Contact Us",
      submenu: CONTACT,
    },
  ];

  const btnhandleClick = () => {
    navigate('/donate');
  };

  const handleLinkClick = () => {
    setToggleMenu(false);
    setDropdownOpen(null);
  };

  const handleMobileDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="bg-gray-300">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full py-6 px-4 md:px-0">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <span>
                  <img
                    src={logo}
                    alt="logo"
                    style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                  />
                </span>
                <span className="text-2xl font-bold">Shinka Welfare Society</span>
              </Link>
            </div>
            <div className="hidden lg:flex space-x-8">
              {linksvalue.map((link, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(index)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    to={link.url || "#"}
                    className="text-gray-700 font-semibold hover:text-black py-2"
                  >
                    {link.name}
                  </Link>
                  {link.submenu && dropdownOpen === index && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                      {link.submenu.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sublink.link}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={handleLinkClick}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button onClick={btnhandleClick} className="bg-blue-500 hover:bg-red-700 text-gray-800 font-bold py-2 mb-4 px-4 rounded">
                Donate Us
              </button>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-4 origin-top duration-500 ${!toggleMenu ? "h-0" : "h-full"}`}
        >
          <div className="px-8 py-4">
            {linksvalue.map((link, index) => (
              <div key={index}>
                <div className="flex justify-between items-center py-2">
                  <Link
                    to={link.url || "#"}
                    className="text-gray-700 font-semibold"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <button
                      onClick={() => handleMobileDropdownToggle(index)}
                      className="text-gray-700 font-semibold"
                    >
                      {dropdownOpen === index ? "-" : "+"}
                    </button>
                  )}
                </div>
                {link.submenu && dropdownOpen === index && (
                  <div className="flex flex-col ml-4">
                    {link.submenu.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sublink.link}
                        className="text-gray-600 py-1"
                        onClick={handleLinkClick}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={btnhandleClick}>
              Donate Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;









