import React, { useState } from 'react';
// import eidImage from '../images/eid.png'; // Adjust the path to your image file

function EidAlAdha() {
  const [language, setLanguage] = useState('urdu');

  const toggleLanguage = () => {
    setLanguage(language === 'urdu' ? 'english' : 'urdu');
  };

  const content = {
    urdu: {
      title: "عيد الاضحى",
      description1:
        "ہر سال عید الاضحی کے موقع پر اجتماعی قربانی بھی کی جاتی ہے۔",
      description2:
        "جس میں گائوں کے تمام مستحق گھروں میں 5 کلو گوشت فی گھرانہ کے حساب سے تقسیم کیا جاتا ہے۔",
    },
    english: {
      title: "Eid-ul-Adha",
      description1:
        "Every year, a collective sacrifice is organized on the occasion of Eid-ul-Adha.",
      description2:
        "The meat is distributed to all deserving households in the village, with 5 kilograms per household.",
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
            src={eidImage}
            alt="Eid-ul-Adha"
            className="rounded-lg mb-8 mx-auto"
            style={{ maxWidth: '100%' }}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default EidAlAdha;
