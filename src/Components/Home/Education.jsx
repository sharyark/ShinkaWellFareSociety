import React, { useState } from 'react';
import educationImage from './images/studyfund.png';

function EducationalFunds() {
  const [language, setLanguage] = useState('urdu');

  const toggleLanguage = () => {
    setLanguage(language === 'urdu' ? 'english' : 'urdu');
  };

  const content = {
    urdu: {
      title: "تعلیم فنڈ",
      description1:
        "گانوں شینکہ کے 635 طلبہ و طالبات کا ٹوٹل تعلیم خرچ شینکہ ویلفیئر سوسائٹی برداشت کر رہی ہے۔ ایک سال کا خرچ 3 لاکھ اسی ہزار روپے آتا ہے۔",
      description2:
        "پہلے گانوں شینکہ سے 5 بچیاں کالج جایا کرتی تھیں۔ اب شینکہ ویلفیئر سوسائٹی کی کالج بس کے ذریعے 35 طالبات شینکہ سے حضرو کالج تک سفر کرکے اپنی تعلیم جاری رکھے ہوئے ہیں۔ ان میں سے زیادہ تر طالبات کا تعلق غریب گھرانوں سے ہے۔",
      description3:
        "گائوں کی 3 مستحق طالبات علامہ اقبال اوپن یونیورسٹی سے اعلی تعلیم حاصل کر رہی ہیں، جن کو ویلفیئر مکمل سپورٹ کر رہی ہے۔",
    },
    english: {
      title: "Educational Funds",
      description1:
        "The total educational expenses for 635 students from Ganon Sheenke are covered by the Sheenka Welfare Society. The annual cost is 380,000 PKR.",
      description2:
        "Initially, only 5 girls from Ganon Sheenke used to go to college. Now, with the Sheenka Welfare Society's college bus, 35 girls travel from Sheenke to Hazro College to continue their education, most of whom come from underprivileged families.",
      description3:
        "Three deserving girls from the village are pursuing higher education at Allama Iqbal Open University, fully supported by the welfare society.",
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
            <p className="text-lg mb-4">{currentContent.description3}</p>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-auto flex flex-col justify-center">
          <img
            src={educationImage}
            alt="Educational Funds"
            className="rounded-lg mb-8 mx-auto"
            style={{ maxWidth: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default EducationalFunds;
