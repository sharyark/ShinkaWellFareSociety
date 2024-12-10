import React, { useState } from 'react';
// import marriageFundImage from './images/marriagefund.png'; // Update the image path as needed

function Marriage() {
  const [language, setLanguage] = useState('urdu');

  const toggleLanguage = () => {
    setLanguage(language === 'urdu' ? 'english' : 'urdu');
  };

  const content = {
    urdu: {
      title: "شادی فنڈ",
      description1:
        "ایک بچی کی شادی پر کل 150000 روپے خرچ آتے ہیں۔",
      description2:
        "شینکہ ویلفیئر سوسائٹی نے اب تک 100 سے زائد بچیوں کی شادیاں کروائیں ہیں۔",
    },
    english: {
      title: "Marriage Fund",
      description1:
        "A total of 150,000 PKR is spent on the marriage of one girl.",
      description2:
        "The Shinka Welfare Society has arranged the marriages of over 100 girls to date.",
    },
  };

  const currentContent = content[language];

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {language === 'urdu' ? 'Switch to English' : 'اردو میں تبدیل کریں'}
        </button>
      </div>
      <div className="md:flex md:justify-between">
        <div className="md:w-5/12 md:pr-4">
          <h2 className="text-3xl font-bold text-center md:text-left mb-6">
            {currentContent.title}
          </h2>
          <div className="mb-4 md:text-left">
            <p className="text-lg mb-4">{currentContent.description1}</p>
            <p className="text-lg mb-4">{currentContent.description2}</p>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-auto flex flex-col justify-center">
          {/* <img
            src={marriageFundImage}
            alt="Marriage Fund"
            className="rounded-lg mb-4 mx-auto"
            style={{
              width: '500px', // Adjust the width as needed
              height: 'auto', // Maintain aspect ratio
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Marriage;
