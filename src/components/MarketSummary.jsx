import React from "react";

const MarketSummary = () => {
  const indices = [
    {
      name: "NIFTY 50",
      value: "24,854.75",
      change: "+0.85%",
      isPositive: true,
    },
    {
      name: "SENSEX",
      value: "81,765.86",
      change: "+0.72%",
      isPositive: true,
    },
    {
      name: "BANK NIFTY",
      value: "52,943.50",
      change: "-0.24%",
      isPositive: false,
    },
    {
      name: "VIX",
      value: "13.45",
      change: "-2.15%",
      isPositive: false,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
      {indices.map((index, idx) => (
        <div key={idx} className="bg-[#1e293b] border border-[#334155] rounded-lg p-6 relative">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-white">{index.name}</h3>
            {index.isPositive ? (
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            )}
          </div>
          <div className="text-2xl font-bold text-white mb-2">{index.value}</div>
          <div className={`text-sm font-medium ${index.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {index.change}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketSummary;

