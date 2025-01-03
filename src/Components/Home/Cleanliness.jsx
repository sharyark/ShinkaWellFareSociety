// import React from 'react';
// import cleanlinessImage from './images/cleanliness.png';

// // Project Bookkeeping data
// const projectBookkeeping = {
//   totalDonations: "$15,000",
//   expenditure: "$12,000",
//   remainingFunds: "$3,000",
//   monthlyData: [
//     { month: "January", year: "2024", expenditure: "$1,500", remainingFunds: "$1,500" },
//     { month: "February", year: "2024", expenditure: "$1,800", remainingFunds: "$1,200" },
//     { month: "February", year: "2023", expenditure: "$300", remainingFunds: "$100" },
//     // Add more monthly data as needed
//   ]
// };

// function CleanlinessProject() {
//   // Function to calculate total expenditure and remaining funds for a year
//   const calculateYearlyTotal = (year) => {
//     const yearlyData = projectBookkeeping.monthlyData.filter(data => data.year === year);
//     const totalExpenditure = yearlyData.reduce((total, data) => total + parseFloat(data.expenditure.replace('$', '').replace(',', '')), 0);
//     const totalRemainingFunds = yearlyData.reduce((total, data) => total + parseFloat(data.remainingFunds.replace('$', '').replace(',', '')), 0);
//     return { totalExpenditure, totalRemainingFunds };
//   };

//   // Function to render monthly data for a specific year
//   const renderMonthlyData = (year) => {
//     const yearlyData = projectBookkeeping.monthlyData.filter(data => data.year === year);
//     return (
//       <>
//         {yearlyData.map((data, index) => (
//           <div key={index} className="border border-gray-300 rounded-md p-2 mb-2 bg-white">
//             <p className="mb-1"><strong>Month:</strong> {data.month}</p>
//             <p className="mb-1"><strong>Expenditure:</strong> {data.expenditure}</p>
//             <p className="mb-1"><strong>Remaining Funds:</strong> {data.remainingFunds}</p>
//           </div>
//         ))}
//         {/* Calculate and display yearly total */}
//         <div className="border border-gray-300 rounded-md p-2 mb-2 bg-white">
//           <p className="mb-1"><strong>Total Expenditure ({year}):</strong> {calculateYearlyTotal(year).totalExpenditure}</p>
//           <p className="mb-1"><strong>Total Remaining Funds ({year}):</strong> {calculateYearlyTotal(year).totalRemainingFunds}</p>
//         </div>
//       </>
//     );
//   };

//   // Extract unique years from monthly data
//   const years = Array.from(new Set(projectBookkeeping.monthlyData.map(data => data.year)));

//   return (
//     <div className="container mx-auto my-10 px-4">
//       <div className="md:flex md:justify-between">
//         <div className="md:w-5/12 md:pr-4">
//           <h2 className="text-3xl font-bold text-center md:text-left mb-6">Cleanliness Project</h2>
//           <div className="mb-4 md:text-left">
//             <p className="text-lg mb-4">
//               Our cleanliness project aims to keep our community clean and hygienic. We organize regular cleanup drives and awareness campaigns to promote cleanliness and environmental sustainability.
//             </p>
//             <p className="text-lg mb-4">
//               We believe in the collective responsibility of every individual towards maintaining a clean and healthy environment. Through our project, we strive to create a positive impact and inspire others to join our cause.
//             </p>
//           </div>
//         </div>
//         <div className="md:w-1/2 md:ml-auto flex flex-col justify-center">
//   <img src={cleanlinessImage} alt="cleanliness" className="rounded-lg mb-8 mx-auto" style={{ maxWidth: '100%' }} />
// </div>
//       </div>
//       <div className="bg-gray-100 rounded-md p-6 mt-6">
//         <h3 className="text-xl font-bold mb-4">Project Bookkeeping</h3>
//         <p className="mb-4">Here is the financial overview of our cleanliness project:</p>
//         <div>
//           {years.map((year, index) => (
//             <div key={index}>
//               <h4 className="text-lg font-semibold mb-2">{year}</h4>
//               {renderMonthlyData(year)}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CleanlinessProject;
import React from 'react';
import cleanlinessImage from './images/cleanliness.png';

// Project Bookkeeping data
const projectBookkeeping = {
  totalDonations: "$15,000",
  expenditure: "$12,000",
  remainingFunds: "$3,000",
  monthlyData: [
    { month: "January", year: "2024", expenditure: "$1,500", remainingFunds: "$1,500", link: "/details/january-2024" },
    { month: "February", year: "2024", expenditure: "$1,800", remainingFunds: "$1,200", link: "/details/february-2024" },
    { month: "February", year: "2023", expenditure: "$300", remainingFunds: "$100", link: "/details/february-2023" },
    // Add more monthly data as needed
  ]
};

function CleanlinessProject() {
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
          <div
            key={index}
            className="border border-gray-300 rounded-md p-2 mb-2 bg-white cursor-pointer"
            onClick={() => window.open(data.link, '_blank')}
          >
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
          <h2 className="text-3xl font-bold text-center md:text-left mb-6">Cleanliness Project</h2>
          <div className="mb-4 md:text-left">
            <p className="text-lg mb-4">
            In the village, 200 trash bins have been placed for proper garbage disposal. A team of 4 sanitation workers is responsible for keeping the area clean. Every day, the streets and alleys are swept thoroughly, and waste is removed from the drains to ensure proper hygiene. The collected garbage is then transported and disposed of in designated areas. On average, one trolley of waste is collected daily. Additionally, the workers regularly sanitize the trash bins and clean public areas to maintain a healthy and safe environment for the residents. Public awareness campaigns are also conducted to encourage responsible waste disposal practices.</p>
            {/* <p className="text-lg mb-4">
              We believe in the collective responsibility of every individual towards maintaining a clean and healthy environment. Through our project, we strive to create a positive impact and inspire others to join our cause.
            </p> */}
          </div>
        </div>
        <div className="md:w-1/2 md:ml-auto flex flex-col justify-center">
          <img src={cleanlinessImage} alt="cleanliness" className="rounded-lg mb-8 mx-auto" style={{ maxWidth: '100%' }} />
        </div>
      </div>
      {/* <div className="bg-gray-100 rounded-md p-6 mt-6">
        <h3 className="text-xl font-bold mb-4">Project Bookkeeping</h3>
        <p className="mb-4">Here is the financial overview of our cleanliness project:</p>
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

export default CleanlinessProject;
