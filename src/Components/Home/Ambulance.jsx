import React from 'react';
import ambulanceImage from './images/abmulance.png';

// Project Bookkeeping data
const projectBookkeeping = {
  totalDonations: "$10,000",
  expenditure: "$8,000",
  remainingFunds: "$2,000",
  monthlyData: [
    { month: "January", year: "2024", expenditure: "$1,000", remainingFunds: "$1,000" },
    { month: "February", year: "2024", expenditure: "$1,200", remainingFunds: "$800" },
    // Add more monthly data as needed
  ]
};

function AmbulanceService() {
  // Function to calculate total expenditure and remaining funds for a year
  // const calculateYearlyTotal = (year) => {
  //   const yearlyData = projectBookkeeping.monthlyData.filter(data => data.year === year);
  //   const totalExpenditure = yearlyData.reduce((total, data) => total + parseFloat(data.expenditure.replace('$', '').replace(',', '')), 0);
  //   const totalRemainingFunds = yearlyData.reduce((total, data) => total + parseFloat(data.remainingFunds.replace('$', '').replace(',', '')), 0);
  //   return { totalExpenditure, totalRemainingFunds };
  // };

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
          <h2 className="text-3xl font-bold text-center md:text-left mb-6">Ambulance Service</h2>
          <div className="mb-4 md:text-left">
            <p className="text-lg mb-4">
              Our ambulance service operates 24/7 and is free for those in need, especially for the underprivileged. We are committed to providing timely assistance during emergencies and ensuring the well-being of our community.
            </p>
            <p className="text-lg mb-4">
              Transparency is at the core of our operations. We believe in accountability and open communication with our donors and beneficiaries. We ensure that every donation is utilized efficiently and effectively for the betterment of society.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-auto flex flex-col justify-center">
  <img src={ambulanceImage} alt="Ambulance" className="rounded-lg mb-8 mx-auto" style={{ maxWidth: '100%' }} />
</div>

    
      </div>
      {/* <div className="bg-gray-100 rounded-md p-6 mt-6">
        <h3 className="text-xl font-bold mb-4">Project Bookkeeping</h3>
        <p className="mb-4">Here is the financial overview of our ambulance service project:</p>
        <div>
          {years.map((year, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-2">{year}</h4>
              {renderMonthlyData(year)}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default AmbulanceService;
