import React, { useState, useEffect } from 'react';
// import shinkaImage from './shinka-image.jpg';

function Home() {
  const texts = [
    'Educational expenses',
    'Free filtered water',
    'Marriage expenses',
    // Add more welfare offerings as needed
  ];

  const [visibleTextIndex, setVisibleTextIndex] = useState(0);
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let currentTextIndex = 0;
    let currentText = '';

    const typeText = () => {
      if (currentTextIndex < texts[visibleTextIndex].length) {
        currentText += texts[visibleTextIndex].charAt(currentTextIndex);
        setVisibleText(currentText);
        currentTextIndex++;
        setTimeout(typeText, 100); // Adjust typing speed as needed
      } else {
        setTimeout(backspaceText, 2000); // Delay before backspacing
      }
    };

    const backspaceText = () => {
      if (currentTextIndex >= 0) {
        currentText = currentText.slice(0, -1);
        setVisibleText(currentText);
        currentTextIndex--;
        setTimeout(backspaceText, 50); // Adjust backspacing speed as needed
      } else {
        currentTextIndex = 0;
        setVisibleTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTimeout(typeText, 1000); // Delay before typing next text
      }
    };

    typeText();

    return () => {
      clearTimeout(typeText);
      clearTimeout(backspaceText);
    };
  }, [texts, visibleTextIndex]);

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center py-8">
      {/* Left Side: Heading */}
      <div className="lg:w-1/2 lg:pr-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
          Welcome to Shinka Welfare Society
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 mb-8 text-center lg:text-left">
          The best welfare trust in Shinka offering:
        </p>
        {/* Render visible text with typing animation */}
        <p className="text-lg lg:text-xl text-gray-700 mb-8 text-center lg:text-left">{visibleText}</p>
      </div>
      {/* Right Side: Image */}
      <div className="lg:w-1/2">
        <img src="#" alt="Shinka Welfare Trust" className="w-full rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default Home;
