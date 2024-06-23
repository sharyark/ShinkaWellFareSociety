import React, { useState } from 'react';

const Financial = () => {
  const [selectedMonth, setSelectedMonth] = useState('april2024');

  const monthUrls = {
    jan2024: 'https://web.facebook.com/photo.php?fbid=429135179454561&set=pb.100070742473712.-2207520000&type=3',
    feb2024: 'https://web.facebook.com/photo.php?fbid=442618134772932&set=pb.100070742473712.-2207520000&type=3',
    march2024: 'https://web.facebook.com/photo.php?fbid=461410762893669&set=pb.100070742473712.-2207520000&type=3',
    april2024: 'https://web.facebook.com/photo.php?fbid=478066284561450&set=pb.100070742473712.-2207520000&type=3',
    may2024: 'https://web.facebook.com/photo.php?fbid=498449415856470&set=pb.100070742473712.-2207520000&type=3',
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
      </h1>

      <div className="mb-4">
        <label htmlFor="monthSelector" className="mr-2">Select Month:</label>
        <select id="monthSelector" value={selectedMonth} onChange={handleMonthChange} className="px-4 py-2 border rounded">
          <option value="jan2024">January 2024</option>
          <option value="feb2024">February 2024</option>
          <option value="march2024">March 2024</option>
          <option value="april2024">April 2024</option>
          <option value="may2024">May 2024</option>
        </select>
      </div>
    </div>
  );
};

export default Financial;



// import React, { useState } from 'react';

// const Financial = () => {
//   const [selectedMonth, setSelectedMonth] = useState('april2024');
//   const [records, setRecords] = useState({
//     april2024: {
//       expenditures: [
//         { description: 'Double duty ambulance driver salary', amount: 24000 },
//         { description: 'Salary for 2 ambulance drivers', amount: 38000 },
//         { description: 'DCP fire cylinders filling', amount: 4000 },
//         { description: 'Cemetery maintenance salary', amount: 15000 },
//         { description: 'Office major salary', amount: 19000 },
//         { description: 'Office mobile monthly expenses', amount: 2000 },
//         { description: 'Office guard salary', amount: 20000 },
//         { description: '4 sign boards prepared', amount: 130000 },
//         { description: 'Stationery expenses', amount: 1680 },
//         { description: 'Plants planted on the roadside and cemetery', amount: 20100 },
//         { description: 'Welfare office electricity bill', amount: 2910 },
//         { description: 'Welfare office expenses', amount: 6000 },
//         { description: 'Rent payment for 1-month garage for 2 ambulances', amount: 3000 },
//         { description: 'Jump painting done at the checkpoint', amount: 33600 },
//         { description: '2 dead body freezers with 2 stabilizers', amount: 15000 },
//         { description: 'College bus driver\'s trip fare', amount: 4400 },
//         { description: 'Office maintenance equipment, etc.', amount: 17100 }
//       ],
//       incomes: [
//         { description: 'Total from 34 ambulance services', amount: 131600 },
//         { description: 'Free dead bodies: 4 + Free road accident services: 5', amount: 0 },
//         { description: 'Free services (Funded from Zakat Fund)', amount: 103500 },
//         { description: 'Paid services', amount: 84000 },
//         { description: 'Petrol expenses for 37 ambulances + mobile oil', amount: 174336 },
//         { description: 'Science expenses for 3 ambulances', amount: 153230 },
//         { description: 'College bus diesel + mobile oil', amount: 36451 },
//         { description: 'College bus public services income', amount: 44000 },
//         { description: 'Remaining total bus fare for female students', amount: 7000 },
//         { description: 'Welfare Fund income', amount: 150000 }
//       ],
//       summary: {
//         totalIncome: 1741752,
//         totalExpenditure: 760967,
//         remainingBalance: 980785
//       }
//     }
//     ,
//     may2024: {
//       expenditures: [
//         { description: 'Double duty ambulance driver salary', amount: 44000 },
//         { description: 'Salary for 2 ambulance drivers', amount: 58000 },
//         { description: 'DCP fire cylinders filling', amount: 3000 },
//         { description: 'Cemetery maintenance salary', amount: 25000 },
//         { description: 'Office major salary', amount: 39000 },
//         { description: 'Office mobile monthly expenses', amount: 1000 },
//         { description: 'Office guard salary', amount: 20000 },
//         { description: '4 sign boards prepared', amount: 130000 },
//         { description: 'Stationery expenses', amount: 1680 },
//         { description: 'Plants planted on the roadside and cemetery', amount: 20100 },
//         { description: 'Welfare office electricity bill', amount: 2910 },
//         { description: 'Welfare office expenses', amount: 6000 },
//         { description: 'Rent payment for 1-month garage for 2 ambulances', amount: 3000 },
//         { description: 'Jump painting done at the checkpoint', amount: 33600 },
//         { description: '2 dead body freezers with 2 stabilizers', amount: 15000 },
//         { description: 'College bus driver\'s trip fare', amount: 1400 },
//         { description: 'Office maintenance equipment, etc.', amount: 117100 }
//       ],
//       incomes: [
//         { description: 'Total from 34 ambulance services', amount: 131600 },
//         { description: 'Free dead bodies: 4 + Free road accident services: 5', amount: 0 },
//         { description: 'Free services (Funded from Zakat Fund)', amount: 203500 },
//         { description: 'Paid services', amount: 44000 },
//         { description: 'Petrol expenses for 37 ambulances + mobile oil', amount: 174336 },
//         { description: 'Science expenses for 3 ambulances', amount: 153230 },
//         { description: 'College bus diesel + mobile oil', amount: 36451 },
//         { description: 'College bus public services income', amount: 44000 },
//         { description: 'Remaining total bus fare for female students', amount: 7000 },
//         { description: 'Welfare Fund income', amount: 150000 }
//       ],
//       summary: {
//         totalIncome: 12241752,
//         totalExpenditure: 2260967,
//         remainingBalance: 2280785
//       }
//     },
//     jan2024: {
//       expenditures: [
//         { description: 'Double duty ambulance driver salary', amount: 28000 },
//         { description: 'Salary for 2 ambulance drivers', amount: 32000 },
//         { description: 'DCP fire cylinders filling', amount: 3000 },
//         // Other expenditures for January 2024...
//       ],
//       incomes: [
//         { description: 'Paid services', amount: 84000 },
//         { description: 'College bus public service income', amount: 44000 },
//         // Other incomes for January 2024...
//       ],
//       summary: {
//         totalIncome: 1800000,
//         totalExpenditure: 750000,
//         remainingBalance: 1050000,
//       }
//     },
//     june2024: {
//       expenditures: [
//         // Expenditure data for June 2024...
//       ],
//       incomes: [
//         // Income data for June 2024...
//       ],
//       summary: {
//         totalIncome: 0,
//         totalExpenditure: 0,
//         remainingBalance: 0,
//       }
//     },
//     july2024: {
//       expenditures: [
//         // Expenditure data for July 2024...
//       ],
//       incomes: [
//         // Income data for July 2024...
//       ],
//       summary: {
//         totalIncome: 0,
//         totalExpenditure: 0,
//         remainingBalance: 0,
//       }
//     }
//   });

//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">
//         Shinka Welfare Society Financial Report - {selectedMonth === 'april2024' ? 'April' : selectedMonth === 'may2024' ? 'May' : selectedMonth === 'june2024' ? 'June' : selectedMonth === 'jan2024' ? 'January' : 'July'} 2024
//       </h1>

//       <div className="mb-4">
//         <label htmlFor="monthSelector" className="mr-2">Select Month:</label>
//         <select id="monthSelector" value={selectedMonth} onChange={handleMonthChange} className="px-4 py-2 border rounded">
//           <option value="april2024">April 2024</option>
//           <option value="may2024">May 2024</option>
//           <option value="jan2024">January 2024</option>
//           <option value="june2024">June 2024</option>
//           <option value="july2024">July 2024</option>
//         </select>
//       </div>

//       <h2 className="text-xl font-semibold mb-2">Expenditures</h2>
//       <table className="min-w-full bg-white border">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border">Description</th>
//             <th className="py-2 px-4 border">Amount (in Rs)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {records[selectedMonth].expenditures.map((item, index) => (
//             <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
//               <td className="py-2 px-4 border">{item.description}</td>
//               <td className="py-2 px-4 border">{item.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2 className="text-xl font-semibold mt-6 mb-2">Incomes</h2>
//       <table className="min-w-full bg-white border">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border">Description</th>
//             <th className="py-2 px-4 border">Amount (in Rs)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {records[selectedMonth].incomes.map((item, index) => (
//             <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
//               <td className="py-2 px-4 border">{item.description}</td>
//               <td className="py-2 px-4 border">{item.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
//       <table className="min-w-full bg-white border">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border">Total Income</th>
//             <th className="py-2 px-4 border">Total Expenditure</th>
//             <th className="py-2 px-4 border">Remaining Balance</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="bg-gray-100">
//             <td className="py-2 px-4 border">{records[selectedMonth].summary.totalIncome}</td>
//             <td className="py-2 px-4 border">{records[selectedMonth].summary.totalExpenditure}</td>
//             <td className="py-2 px-4 border">{records[selectedMonth].summary.remainingBalance}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Financial;

// // import React, { useState } from 'react';

// // const Financial = () => {
// //   const [selectedMonth, setSelectedMonth] = useState('april2024');
// //   const [records, setRecords] = useState({
// //     april2024: {
// //       expenditures: [
// //         { description: 'Double duty ambulance driver salary', amount: 14000 },
// //         { description: 'Salary for 2 ambulance drivers', amount: 21000 },
// //         { description: 'DCP fire cylinders filling', amount: 99000 },
// //         // Other expenditures for April 2024...
// //       ],
// //       incomes: [
// //         { description: 'Paid services', amount: 8000 },
// //         { description: 'College bus public service income', amount: 67000 },
// //         // Other incomes for April 2024...
// //       ],
// //       summary: {
// //         totalIncome: 1741752,
// //         totalExpenditure: 760967,
// //         remainingBalance: 980785,
// //       }
// //     },
// //     may2024: {
// //       expenditures: [
// //         { description: 'Double duty ambulance driver salary', amount: 24000 },
// //         { description: 'Salary for 2 ambulance drivers', amount: 38000 },
// //         { description: 'DCP fire cylinders filling', amount: 4000 },
// //         // Other expenditures for May 2024...
// //       ],
// //       incomes: [
// //         { description: 'Paid services', amount: 84000 },
// //         { description: 'College bus public service income', amount: 44000 },
// //         // Other incomes for May 2024...
// //       ],
// //       summary: {
// //         totalIncome: 1800000,
// //         totalExpenditure: 750000,
// //         remainingBalance: 1050000,
// //       }
// //     },
// //     jan2024: {
// //         expenditures: [
// //           { description: 'Double duty ambulance driver salary', amount: 28000 },
// //           { description: 'Salary for 2 ambulance drivers', amount: 32000 },
// //           { description: 'DCP fire cylinders filling', amount: 3000 },
// //           // Other expenditures for May 2024...
// //         ],
// //         incomes: [
// //           { description: 'Paid services', amount: 84000 },
// //           { description: 'College bus public service income', amount: 44000 },
// //           // Other incomes for May 2024...
// //         ],
// //         summary: {
// //           totalIncome: 1800000,
// //           totalExpenditure: 750000,
// //           remainingBalance: 1050000,
// //         }
// //       },
// //     june2024: {
// //       expenditures: [
// //         // Expenditure data for June 2024...
// //       ],
// //       incomes: [
// //         // Income data for June 2024...
// //       ],
// //       summary: {
// //         totalIncome: 0,
// //         totalExpenditure: 0,
// //         remainingBalance: 0,
// //       }
// //     },
// //     july2024: {
// //       expenditures: [
// //         // Expenditure data for July 2024...
// //       ],
// //       incomes: [
// //         // Income data for July 2024...
// //       ],
// //       summary: {
// //         totalIncome: 0,
// //         totalExpenditure: 0,
// //         remainingBalance: 0,
// //       }
// //     }
// //   });

// //   const handleMonthChange = (month) => {
// //     setSelectedMonth(month);
// //   };

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">Shinka Welfare Society Financial Report - {selectedMonth === 'april2024' ? 'April' : selectedMonth === 'may2024' ? 'May' : selectedMonth === 'june2024' ? 'June' : 'jan'} 2024</h1>

// //       <button className="mr-4 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleMonthChange('april2024')}>April 2024</button>
// //       <button className="mr-4 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleMonthChange('may2024')}>May 2024</button>
// //       <button className="mr-4 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleMonthChange('june2024')}>June 2024</button>
// //       <button className="mr-4 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleMonthChange('july2024')}>July 2024</button>
// //       <button className="mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleMonthChange('jan2024')}>Jan 2024</button>

// //       <h2 className="text-xl font-semibold mb-2">Expenditures</h2>
// //       <table className="min-w-full bg-white border">
// //         <thead>
// //           <tr>
// //             <th className="py-2 px-4 border">Description</th>
// //             <th className="py-2 px-4 border">Amount (in Rs)</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {records[selectedMonth].expenditures.map((item, index) => (
// //             <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
// //               <td className="py-2 px-4 border">{item.description}</td>
// //               <td className="py-2 px-4 border">{item.amount}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       <h2 className="text-xl font-semibold mt-6 mb-2">Incomes</h2>
// //       <table className="min-w-full bg-white border">
// //         <thead>
// //           <tr>
// //             <th className="py-2 px-4 border">Description</th>
// //             <th className="py-2 px-4 border">Amount (in Rs)</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {records[selectedMonth].incomes.map((item, index) => (
// //             <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
// //               <td className="py-2 px-4 border">{item.description}</td>
// //               <td className="py-2 px-4 border">{item.amount}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
// //       <table className="min-w-full bg-white border">
// //         <thead>
// //           <tr>
// //             <th className="py-2 px-4 border">Total Income</th>
// //             <th className="py-2 px-4 border">Total Expenditure</th>
// //             <th className="py-2 px-4 border">Remaining Balance</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           <tr className="bg-gray-100">
// //             <td className="py-2 px-4 border">{records[selectedMonth].summary.totalIncome}</td>
// //             <td className="py-2 px-4 border">{records[selectedMonth].summary.totalExpenditure}</td>
// //             <td className="py-2 px-4 border">{records[selectedMonth].summary.remainingBalance}</td>
// //           </tr>
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Financial;
