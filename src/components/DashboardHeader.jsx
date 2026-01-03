import React from "react";

const DashboardHeader = () => {
  const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="flex justify-between items-start mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0ms" }}>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h1 className="text-3xl font-bold text-white">Stock Dashboard</h1>
        </div>
        <p className="text-gray-400 text-sm">{getCurrentDate()}</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-medium">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          Market Open
        </button>
       
      </div>
    </div>
  );
};

export default DashboardHeader;

