import React, { useState } from 'react';
// import waterImage from './images/water.png'; // Make sure the image path is correct

function Ourprogram() {
  // State for switching languages
  const [language, setLanguage] = useState('urdu');

  const toggleLanguage = () => {
    setLanguage(language === 'urdu' ? 'english' : 'urdu');
  };

  // Content for both Free Filtered Water and Boring Fund
  const content = {
    urdu: {
      freeFilteredWater: {
        title: "مفت فلٹر پانی",
        description1:
          "ہم نے گانوں کے تمام رہائشیوں کو صاف اور محفوظ پینے کے پانی تک مفت رسائی فراہم کی ہے۔ مختلف مقامات پر واٹر فلٹریشن سسٹم کی تنصیب کے ذریعے ہم یہ یقینی بناتے ہیں کہ کمیونٹی کو مستقل طور پر پینے کے پانی تک رسائی حاصل ہو۔ ہمارے سسٹمز کو بڑھتی ہوئی مانگ کو پورا کرنے اور صاف پانی کی پائیدار فراہمی کو برقرار رکھنے کے لئے ڈیزائن کیا گیا ہے۔",
        description2:
          "ہمارا مقصد فلٹر شدہ پانی کی فراہمی کے ذریعے پانی سے پیدا ہونے والی بیماریوں کو ختم کرکے عوامی صحت کو بہتر بنانا ہے۔ ہم اپنے کام کو بہتر بنانے کے لئے مسلسل کام کر رہے ہیں اور ہر مرحلے میں شفافیت اور جوابدہی کو یقینی بناتے ہیں۔",
      },
      boringFund: {
        title: "بورنگ فنڈ",
        description1:
          "شینکہ ویلفیئر سوسائٹی نے گانوں میں 108 مستحق گھرانوں کے لئے پانی کے بورنگ کروائے ہیں۔",
        description2: "ہر بورنگ پر 45 ہزار روپے خرچ آتا ہے۔",
      },
    },
    english: {
      freeFilteredWater: {
        title: "Free Filtered Water",
        description1:
          "We have provided free access to clean and safe drinking water for all the residents of Gano. Through the installation of water filtration systems in various locations, we ensure that the community has consistent access to potable water. Our systems are designed to meet the increasing demand and maintain a sustainable supply of clean water.",
        description2:
          "Our goal is to improve public health by eliminating waterborne diseases through the provision of filtered water. We continuously work to enhance our operations while ensuring transparency and accountability in every phase of the process.",
      },
      boringFund: {
        title: "Boring Fund",
        description1:
          "The Shinka Welfare Society has arranged water borings for 108 deserving households in Gano.",
        description2: "Each boring costs 45,000 PKR.",
      },
    },
  };

  const currentContent = content[language];

  return (
    <div className="container mx-auto my-10 px-4">
      {/* Free Filtered Water Section */}
      <div className="md:flex md:justify-between">
        <div className="md:w-5/12 md:pr-4">
          <h2 className={`text-3xl font-bold mb-6 ${language === 'urdu' ? 'text-right' : 'text-left'}`}>
            {currentContent.freeFilteredWater.title}
          </h2>
          <div className={`mb-4 ${language === 'urdu' ? 'text-right' : 'text-left'}`}>
            <p className="text-lg mb-4">{currentContent.freeFilteredWater.description1}</p>
            <p className="text-lg mb-4">{currentContent.freeFilteredWater.description2}</p>
          </div>
        </div>
        {/* <div className="md:w-1/2 md:ml-auto flex flex-col justify-center">
          <img
            src={waterImage}
            alt="water"
            className="rounded-lg mb-8 mx-auto"
            style={{ maxWidth: '100%' }}
          />
        </div> */}
      </div>

      {/* Boring Fund Section */}
      <div className="md:flex md:justify-between mt-8">
        <div className="md:w-5/12 md:pr-4">
          <h2 className={`text-3xl font-bold mb-6 ${language === 'urdu' ? 'text-right' : 'text-left'}`}>
            {currentContent.boringFund.title}
          </h2>
          <div className={`mb-4 ${language === 'urdu' ? 'text-right' : 'text-left'}`}>
            <p className="text-lg mb-4">{currentContent.boringFund.description1}</p>
            <p className="text-lg mb-4">{currentContent.boringFund.description2}</p>
          </div>
        </div>
      </div>

      {/* Language Toggle Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {language === 'urdu' ? 'Switch to English' : 'اردو میں تبدیل کریں'}
        </button>
      </div>
    </div>
  );
}

export default Ourprogram;
