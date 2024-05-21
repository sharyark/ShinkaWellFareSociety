import React from 'react';
import burialImage from './images/burial.png';

// Project Bookkeeping data
const projectBookkeeping = {
  totalDonations: "$5,000",
  expenditure: "$4,500",
  remainingFunds: "$500",
  monthlyData: [
    { month: "January", year: "2023", expenditure: "$1,000", remainingFunds: "$500" },
    { month: "March", year: "2023", expenditure: "$1,200", remainingFunds: "$300" },
    { month: "June", year: "2023", expenditure: "$1,300", remainingFunds: "$200" },
    { month: "September", year: "2023", expenditure: "$1,000", remainingFunds: "$0" },
    // Add more monthly data as needed
  ]
};

function BurialFunds() {
  // Function to calculate total expenditure and remaining funds for a year
  const calculateYearlyTotal = (year) => {
    const yearlyData = projectBookkeeping.monthlyData.filter(data => data.year === year);
    const totalExpenditure = yearlyData.reduce((total, data) => total + parseFloat(data.expenditure.replace('$', '').replace(',', '')), 0);
    const totalRemainingFunds = yearlyData.reduce((total, data) => total + parseFloat(data.remainingFunds.replace('$', '').replace(',', '')), 0);
    return { totalExpenditure, totalRemainingFunds };
  };

  // Function to render monthly data for a specific year
  const renderMonthlyData = (year) => {
    const yearlyData = projectBookkeeping.monthlyData.filter(data => data.year === year);
    return (
      <>
        {yearlyData.map((data, index) => (
          <div key={index} className="border border-gray-300 rounded-md p-2 mb-2 bg-white">
            <p className="mb-1"><strong>Month:</strong> {data.month}</p>
            <p className="mb-1"><strong>Expenditure:</strong> {data.expenditure}</p>
            <p className="mb-1"><strong>Remaining Funds:</strong> {data.remainingFunds}</p>
          </div>
        ))}
        {/* Calculate and display yearly total */}
        <div className="border border-gray-300 rounded-md p-2 mb-2 bg-white">
          <p className="mb-1"><strong>Total Expenditure ({year}):</strong> {calculateYearlyTotal(year).totalExpenditure}</p>
          <p className="mb-1"><strong>Total Remaining Funds ({year}):</strong> {calculateYearlyTotal(year).totalRemainingFunds}</p>
        </div>
      </>
    );
  };

  // Extract unique years from monthly data
  const years = Array.from(new Set(projectBookkeeping.monthlyData.map(data => data.year)));

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="md:flex md:justify-between">
        <div className="md:w-5/12 md:pr-4">
          <h2 className="text-3xl font-bold text-center md:text-left mb-6">Burial Funds</h2>
          <div className="mb-4 md:text-left">
            <p className="text-lg mb-4">
              Our burial fund program assists families in covering funeral and burial expenses. We understand the emotional and financial burden of losing a loved one, and we aim to provide support during these difficult times.
            </p>
            <p className="text-lg mb-4">
              Transparency is key to our operations. We ensure that all donations are managed responsibly and are used to provide dignified burials for those in need.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-auto flex flex-col justify-center">
  <img src={burialImage} alt="burial" className="rounded-lg mb-8 mx-auto" style={{ maxWidth: '100%' }} />
</div>

      </div>
      <div className="bg-gray-100 rounded-md p-6 mt-6">
        <h3 className="text-xl font-bold mb-4">Project Bookkeeping</h3>
        <p className="mb-4">Here is the financial overview of our burial fund project:</p>
        <div>
          {years.map((year, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-2">{year}</h4>
              {renderMonthlyData(year)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BurialFunds;
