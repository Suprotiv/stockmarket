import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const numFormatter = new Intl.NumberFormat("en-US");

// Color mapping for different companies
const getCompanyColor = (companyName) => {
  const colorMap = {
    "Zomato": "#00ffcc",           // Cyan
    "ITC": "#ff6b6b",               // Red
    "Adani Ports": "#ff9ff3",       // Teal
    "Maruti Suzuki": "#ffe66d",     // Yellow
    "Bharti Airtel": "#ffa502",     // Light Green
  };
  
  return colorMap[companyName] || "#00ffcc"; // Default to cyan if not found
};

// Helper function to convert hex to rgba
const hexToRgba = (hex, alpha = 0.1) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const StockChart = ({ getData, name, range, sessionKey }) => {
  const lineColor = getCompanyColor(name);
  const backgroundColor = hexToRgba(lineColor, 0.1);
  // Use function form to ensure we get the latest getData value
  const getInitialPrice = () => getData[0]?.price || 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [latestPrice, setLatestPrice] = useState(() => getInitialPrice());
  const [dataPoints, setDataPoints] = useState(() => [getInitialPrice()]);
  const prevSessionKeyRef = useRef(sessionKey);

  // Reset state when sessionKey changes (when switching sessions)
  useEffect(() => {
    const currentFirstPrice = getData[0]?.price || 0;
    if (prevSessionKeyRef.current !== sessionKey) {
      // Reset all state immediately
      console.log(`Resetting ${name} to price: ${currentFirstPrice}, sessionKey: ${sessionKey}`);
      setCurrentIndex(0);
      setLatestPrice(currentFirstPrice);
      setDataPoints([currentFirstPrice]);
      prevSessionKeyRef.current = sessionKey;
    }
  }, [sessionKey, getData, name]);

  useEffect(() => {
    // Don't start intervals if we don't have valid data
    if (!getData || getData.length === 0) return;

    const updateRandomPrice = () => {
      setLatestPrice((prevPrice) => {
        const currentIdx = currentIndex;
        const targetPrice = getData[currentIdx + 1]?.price;
        if (targetPrice !== undefined) {
          const remainingUpdates = 12 - (Math.floor(currentIdx / 5) % 12);
          const difference = (targetPrice - prevPrice) / remainingUpdates;
          const randomFluctuation = difference * (Math.random() * 0.4 - 0.2); // Random fluctuation between -20% and +20% of the required difference
          return prevPrice + difference + randomFluctuation;
        }
        return prevPrice;
      });
    };

    const intervalId = setInterval(() => {
      if (currentIndex < getData.length - 1) {
        updateRandomPrice();
      } else {
        clearInterval(intervalId);
      }
    }, 5000);

    const timeoutId = setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < getData.length) {
          setLatestPrice(getData[nextIndex]?.price); // Snap to exact target price at each minute
        }
        return nextIndex;
      });
    }, 60000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [currentIndex, getData]);

  // Update data points with each latestPrice change
  useEffect(() => {
    // Only append if we're not at the initial state (to avoid duplicate first point)
    setDataPoints((prevData) => {
      // If this is the first price and we already have it, don't add again
      if (prevData.length === 1 && prevData[0] === latestPrice && currentIndex === 0) {
        return prevData;
      }
      return [...prevData, latestPrice];
    });
  }, [latestPrice, currentIndex]);

  const chartData = {
   labels: dataPoints.map((_, i) => (i * 5)-5 <0 ? null : (i * 5)-5), // Time labels based on the number of data points
    datasets: [
      {
        label: "Stock Price (₹)",
        data: dataPoints,
        borderColor: lineColor,
        backgroundColor: backgroundColor,
        pointRadius: 0,
        borderWidth: 2,
        tension: 0.1, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,  // Allow chart to fit the div
    layout: {
      padding: {
        top: 25,
       
        bottom: 10,
      
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Time (sec)",
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Stock Price (₹)",
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
          callback: (value) => `₹${numFormatter.format(value)}`,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#ffffff",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `₹${numFormatter.format(context.raw)}`,
        },
      },
    },
  };
  return (
    <div className="relative rounded-lg overflow-hidden bg-[#1e1e1e] p-4 h-[250px]">
      <div className="absolute top-2 left-2 text-white text-xs font-bold z-10 pl-5 py-1">
        {name}
      </div>
      <Line data={chartData} options={options} />
      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md z-10">
        <strong>Price:</strong> ₹{numFormatter.format(latestPrice)}
      </div>
    </div>
  );
};

export default StockChart;
