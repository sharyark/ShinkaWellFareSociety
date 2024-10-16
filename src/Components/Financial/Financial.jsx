import React, { useState } from 'react';

const Financial = () => {
  const [selectedMonth, setSelectedMonth] = useState('april2024');

  const monthUrls = {
    jan2024: 'https://web.facebook.com/photo.php?fbid=429135179454561&set=pb.100070742473712.-2207520000&type=3',
    feb2024: 'https://web.facebook.com/photo.php?fbid=442618134772932&set=pb.100070742473712.-2207520000&type=3',
    march2024: 'https://web.facebook.com/photo.php?fbid=461410762893669&set=pb.100070742473712.-2207520000&type=3',
    april2024: 'https://web.facebook.com/photo.php?fbid=478066284561450&set=pb.100070742473712.-2207520000&type=3',
    may2024: 'https://web.facebook.com/photo.php?fbid=498449415856470&set=pb.100070742473712.-2207520000&type=3',
    june2024: 'https://www.facebook.com/photo.php?fbid=513357521032326&set=pb.100070742473712.-2207520000&type=3',
    jully2024: 'https://www.facebook.com/photo.php?fbid=532981859069892&set=pb.100070742473712.-2207520000&type=3',
    augest2024: 'https://www.facebook.com/photo.php?fbid=553088800392531&set=pb.100070742473712.-2207520000&type=3',
  };

  const handleMonthChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedMonth(selectedValue);
    window.open(monthUrls[selectedValue], '_blank');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Shinka Welfare Society Financial Report - 
        {selectedMonth === 'april2024' && ' April 2024'}
        {selectedMonth === 'may2024' && ' May 2024'}
        {selectedMonth === 'jan2024' && ' January 2024'}
        {selectedMonth === 'feb2024' && ' February 2024'}
        {selectedMonth === 'march2024' && ' March 2024'}
        {selectedMonth === 'june2024' && ' June 2024'}
        {selectedMonth === 'jully2024' && ' July 2024'}
        {selectedMonth === 'augest2024' && ' August 2024'}
      </h1>

      <div className="mb-4">
        <label htmlFor="monthSelector" className="mr-2"><strong>Select desired Month to see book keeping:</strong></label>
        <select
          id="monthSelector"
          value={selectedMonth}
          onChange={handleMonthChange}
          className="px-4 py-2 border rounded"
        >
          <option value="jan2024">January 2024</option>
          <option value="feb2024">February 2024</option>
          <option value="march2024">March 2024</option>
          <option value="april2024">April 2024</option>
          <option value="may2024">May 2024</option>
          <option value="june2024">June 2024</option>
          <option value="jully2024">July 2024</option>
          <option value="augest2024">August 2024</option>
        </select>
      </div>
    </div>
  );
};

export default Financial;

// import React, { useState } from 'react';

// const Financial = () => {
//   const [selectedMonth, setSelectedMonth] = useState('april2024');

//   const monthUrls = {
//     jan2024: 'https://web.facebook.com/photo.php?fbid=429135179454561&set=pb.100070742473712.-2207520000&type=3',
//     feb2024: 'https://web.facebook.com/photo.php?fbid=442618134772932&set=pb.100070742473712.-2207520000&type=3',
//     march2024: 'https://web.facebook.com/photo.php?fbid=461410762893669&set=pb.100070742473712.-2207520000&type=3',
//     april2024: 'https://web.facebook.com/photo.php?fbid=478066284561450&set=pb.100070742473712.-2207520000&type=3',
//     may2024: 'https://web.facebook.com/photo.php?fbid=498449415856470&set=pb.100070742473712.-2207520000&type=3',
//     june2024: 'https://www.facebook.com/photo.php?fbid=513357521032326&set=pb.100070742473712.-2207520000&type=3',
//     jully2024: 'https://www.facebook.com/photo.php?fbid=532981859069892&set=pb.100070742473712.-2207520000&type=3',
//     augest2024: 'https://www.facebook.com/photo.php?fbid=553088800392531&set=pb.100070742473712.-2207520000&type=3',
//   };

//   const handleMonthChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedMonth(selectedValue);
//     window.open(monthUrls[selectedValue], '_blank');
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">
//         Shinka Welfare Society Financial Report - 
//         {selectedMonth === 'april2024' && ' April 2024'}
//         {selectedMonth === 'may2024' && ' May 2024'}
//         {selectedMonth === 'jan2024' && ' January 2024'}
//         {selectedMonth === 'feb2024' && ' February 2024'}
//         {selectedMonth === 'march2024' && ' March 2024'}
//       </h1>

//       <div className="mb-4">
//         <label htmlFor="monthSelector" className="mr-2" ><strong>Select desired Month to see book keeping :</strong></label>
//         <select id="monthSelector" value={selectedMonth} onChange={handleMonthChange} className="px-4 py-2 border rounded">
//           <option value="jan2024">January 2024</option>
//           <option value="feb2024">February 2024</option>
//           <option value="march2024">March 2024</option>
//           <option value="april2024">April 2024</option>
//           <option value="may2024">May 2024</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Financial;

