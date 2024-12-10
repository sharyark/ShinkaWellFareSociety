import { useState } from 'react';
import securityImage from '../Home/images/image10.jpg'; // Update this path to your actual image

function Security() {
  const [language, setLanguage] = useState('urdu');

  const toggleLanguage = () => {
    setLanguage(language === 'urdu' ? 'english' : 'urdu');
  };

  const content = {
    urdu: {
      title: "سیکیورٹی سسٹم",
      description1:
        "پورے گائوں میں 40 عدد سیکیورٹی کیمرے نصب کیے گئے ہیں۔ جن پر ٹوٹل 22 لاکھ 40 ہزار روپے لاگت آئی ہے۔",
      description2: "رات کو گائوں میں سیکیورٹی گارڈ پیره بھی دیتا ہے۔",
      description3: "گائوں کی گلیوں میں اسٹریٹ لائٹس بھی نصب کی گئی ہیں۔",
    },
    english: {
      title: "Security System",
      description1:
        "A total of 40 security cameras have been installed throughout the village, costing a total of 2,240,000 PKR.",
      description2: "A security guard also patrols the village at night.",
      description3: "Streetlights have also been installed in the village streets.",
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
            src={securityImage}
            alt="Security System"
            className="rounded-lg mb-4 mx-auto"
            style={{
              width: '500px', // Set a specific width
              height: 'auto', // Maintain aspect ratio
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Security;
