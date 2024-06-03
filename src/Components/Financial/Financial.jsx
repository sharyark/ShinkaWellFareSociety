import React, { useState } from 'react';

const Financial = () => {
  const [selectedMonth, setSelectedMonth] = useState('april2024');
  const [records, setRecords] = useState({
    april2024: {
      expenditures: [
        { description: 'Double duty ambulance driver salary', amount: 14000 },
        { description: 'Salary for 2 ambulance drivers', amount: 21000 },
        { description: 'DCP fire cylinders filling', amount: 99000 },
        // Other expenditures for April 2024...
      ],
      incomes: [
        { description: 'Paid services', amount: 8000 },
        { description: 'College bus public service income', amount: 67000 },
        // Other incomes for April 2024...
      ],
      summary: {
        totalIncome: 1741752,
        totalExpenditure: 760967,
        remainingBalance: 980785,
      }
    },
    may2024: {
      expenditures: [
        { description: 'Double duty ambulance driver salary', amount: 24000 },
        { description: 'Salary for 2 ambulance drivers', amount: 38000 },
        { description: 'DCP fire cylinders filling', amount: 4000 },
        // Other expenditures for May 2024...
      ],
      incomes: [
        { description: 'Paid services', amount: 84000 },
        { description: 'College bus public service income', amount: 44000 },
        // Other incomes for May 2024...
      ],
      summary: {
        totalIncome: 1800000,
        totalExpenditure: 750000,
        remainingBalance: 1050000,
      }
    },
    jan2024: {
        expenditures: [
          { description: 'Double duty ambulance driver salary', amount: 28000 },
          { description: 'Salary for 2 ambulance drivers', amount: 32000 },
          { description: 'DCP fire cylinders filling', amount: 3000 },
          // Other expenditures for May 2024...
        ],
        incomes: [
          { description: 'Paid services', amount: 84000 },
          { description: 'College bus public service income', amount: 44000 },
          // Other incomes for May 2024...
        ],
        summary: {
          totalIncome: 1800000,
          totalExpenditure: 750000,
          remainingBalance: 1050000,
        }
      },
    june2024: {
      expenditures: [
        // Expenditure data for June 2024...
      ],
      incomes: [
        // Income data for June 2024...
      ],
      summary: {
        totalIncome: 0,
        totalExpenditure: 0,
        remainingBalance: 0,
      }
    },
    july2024: {
      expenditures: [
        // Expenditure data for July 2024...
      ],
      incomes: [
        // Income data for July 2024...
      ],
      summary: {
        totalIncome: 0,
        totalExpenditure: 0,
        remainingBalance: 0,
      }
    }
  });

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shinka Welfare Society Financial Report - {selectedMonth === 'april2024' ? 'April' : selectedMonth === 'may2024' ? 'May' : selectedMonth === 'june2024' ? 'June' : 'jan'} 2024</h1>

      <button className="mr-4 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleMonthChange('april2024')}>April 2024</button>
      <button className="mr-4 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleMonthChange('may2024')}>May 2024</button>
      <button className="mr-4 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleMonthChange('june2024')}>June 2024</button>
      <button className="mr-4 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleMonthChange('july2024')}>July 2024</button>
      <button className="mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleMonthChange('jan2024')}>Jan 2024</button>

      <h2 className="text-xl font-semibold mb-2">Expenditures</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Amount (in Rs)</th>
          </tr>
        </thead>
        <tbody>
          {records[selectedMonth].expenditures.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="py-2 px-4 border">{item.description}</td>
              <td className="py-2 px-4 border">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-6 mb-2">Incomes</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Amount (in Rs)</th>
          </tr>
        </thead>
        <tbody>
          {records[selectedMonth].incomes.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="py-2 px-4 border">{item.description}</td>
              <td className="py-2 px-4 border">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Total Income</th>
            <th className="py-2 px-4 border">Total Expenditure</th>
            <th className="py-2 px-4 border">Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="py-2 px-4 border">{records[selectedMonth].summary.totalIncome}</td>
            <td className="py-2 px-4 border">{records[selectedMonth].summary.totalExpenditure}</td>
            <td className="py-2 px-4 border">{records[selectedMonth].summary.remainingBalance}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Financial;
