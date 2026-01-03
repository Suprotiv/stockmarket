import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Dashboard = () => {
  // Get current date
  const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Market Indices Data
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

  // Watchlist Stocks Data
  const stocks = [
    {
      symbol: "ZOMATO",
      companyName: "Zomato Limited",
      price: "₹195.21",
      change: "+₹3.45",
      changePercent: "+1.80%",
      isPositive: true,
      chartData: {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [{
          label: 'Price',
          data: [190, 191, 192, 193, 193.5, 194, 194.5, 195, 195.2, 195.21],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2,
        }]
      }
    },
    {
      symbol: "ITC",
      companyName: "ITC Limited",
      price: "₹449.70",
      change: "₹-2.85",
      changePercent: "-0.63%",
      isPositive: false,
      chartData: {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [{
          label: 'Price',
          data: [455, 454, 453, 452, 451.5, 451, 450.5, 450, 450, 449.7],
          borderColor: '#ef4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2,
        }]
      }
    },
  ];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
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
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Market Indices Section */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {indices.map((index, idx) => (
          <div key={idx} className="bg-[#1e293b] rounded-lg p-6 relative">
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

      {/* Watchlist Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Watchlist</h2>
            <p className="text-gray-400 text-sm">Track your favorite stocks</p>
          </div>
          <a href="#" className="text-green-500 hover:text-green-400 font-medium">
            View All →
          </a>
        </div>

        {/* Stock Cards */}
        <div className="grid grid-cols-2 gap-4">
          {stocks.map((stock, idx) => (
            <div key={idx} className="bg-[#1e293b] rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">{stock.symbol}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      stock.isPositive 
                        ? 'bg-green-500/20 text-green-500' 
                        : 'bg-red-500/20 text-red-500'
                    }`}>
                      {stock.changePercent}
                    </span>
                    {stock.isPositive ? (
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">{stock.companyName}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-1">{stock.price}</div>
                <div className={`text-sm font-medium ${stock.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {stock.change}
                </div>
              </div>
              <div className="h-20">
                <Line data={stock.chartData} options={chartOptions} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

