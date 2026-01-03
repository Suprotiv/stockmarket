import React, { useState, useEffect, useMemo } from "react";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import MarketSummary from "./components/MarketSummary";
import Charts from "./Charts";

const Session3 = () => {
  const [popupVisible, setPopupVisible] = useState(true);
  const [screen,setScreen]=useState(true)
 
  const [popupCount, setPopupCount] = useState(0);
  const navigate =useNavigate() // Track the number of times the popup is shown

  // Define the messages for each time slot
  const timeSlotMessages = [
    { time: 0, message: "Session 3 is starting now. Please wait for the data to load." },
    { time: 1, message: "Market participants note incremental changes in Zomato's operating metrics, though views on long-term profitability remain divided." },
    { time: 2, message: "Telecom stocks draw attention as investors revisit sector pricing dynamics and long-term revenue visibility." },
    { time: 3, message: "Auto stocks see selective interest following the release of recent industry sales data." },
    { time: 4, message: "ITC witnesses steady institutional interest as investors evaluate defensive positioning within portfolios." },
  ];

  // Memoize the datasets to prevent reference changes on each render
  useEffect(() => {
    setTimeout(() => setPopupVisible(false), 10000);
  }, []);

  // SESSION 3 - CLOSING & SENTIMENT SHIFT
  const datasets2 = useMemo(() => [
    {
      name: "Zomato",
      data: [
        { time: 0, price: 183.0 },
        { time: 1, price: 185.5 },
        { time: 2, price: 188.0 },
        { time: 3, price: 188.5 },
        { time: 4, price: 188.0 },
        { time: 5, price: 189.0 },
        { time: 6, price: 188.0 },
        { time: 7, price: 189.2 },
        { time: 8, price: 188.0 },
        { time: 9, price: 189.5 },
        { time: 10, price: 190.0 },
      ],
      range: 0.15,
    },
    {
      name: "ITC",
      data: [
        { time: 0, price: 459.0 },
        { time: 1, price: 459.5 },
        { time: 2, price: 459.0 },
        { time: 3, price: 460.0 },
        { time: 4, price: 459.0 },
        { time: 5, price: 461.5 },
        { time: 6, price: 459.0 },
        { time: 7, price: 463.5 },
        { time: 8, price: 468.0 },
        { time: 9, price: 470.5 },
        { time: 10, price: 473.0 },
      ],
      range: 0.4,
    },
    {
      name: "Adani Ports",
      data: [
        { time: 0, price: 816.0 },
        { time: 1, price: 817.5 },
        { time: 2, price: 816.0 },
        { time: 3, price: 818.0 },
        { time: 4, price: 816.0 },
        { time: 5, price: 819.0 },
        { time: 6, price: 816.0 },
        { time: 7, price: 820.0 },
        { time: 8, price: 816.0 },
        { time: 9, price: 821.0 },
        { time: 10, price: 824.0 },
      ],
      range: 0.25,
    },
    {
      name: "Maruti Suzuki",
      data: [
        { time: 0, price: 9604.0 },
        { time: 1, price: 9620.0 },
        { time: 2, price: 9604.0 },
        { time: 3, price: 9650.0 },
        { time: 4, price: 9604.0 },
        { time: 5, price: 9750.0 },
        { time: 6, price: 9892.0 },
        { time: 7, price: 9910.0 },
        { time: 8, price: 9892.0 },
        { time: 9, price: 9940.0 },
        { time: 10, price: 9991.0 },
      ],
      range: 0.15,
    },
    {
      name: "Bharti Airtel",
      data: [
        { time: 0, price: 960.0 },
        { time: 1, price: 970.0 },
        { time: 2, price: 960.0 },
        { time: 3, price: 980.0 },
        { time: 4, price: 998.0 },
        { time: 5, price: 1000.0 },
        { time: 6, price: 998.0 },
        { time: 7, price: 1003.0 },
        { time: 8, price: 998.0 },
        { time: 9, price: 1005.0 },
        { time: 10, price: 1008.0 },
      ],
      range: 0.15,
    },
  ], []);
  
  const [sessionKey] = useState(Date.now());
  
  const changeSession =()=>{
    navigate('/session2')
  }
  useEffect(()=>{
    setTimeout(()=>{
      setScreen(false);
    },3500)
  },[])

  useEffect(() => {
    // Set interval to trigger the popup every 2 seconds
    const intervalId = setInterval(() => {
      if (popupCount < 4) {
        setPopupVisible(true);
        setPopupCount(prev => prev + 1);

        // Hide popup after a short delay (e.g., 1 second)
        setTimeout(() => setPopupVisible(false), 10000);
      } else {
        clearInterval(intervalId);
      }
    }, 120000);

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, [popupCount]);

  // Get the message for the current time slot based on the popup count
  const currentMessage =
    timeSlotMessages[popupCount % timeSlotMessages.length]?.message || "No message";

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom right, hsl(var(--primary) / 0.05), transparent, hsl(var(--chart-violet) / 0.05))`
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />
        
       
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div>
            <h2 className="text-lg font-semibold text-white">Watchlist</h2>
            <p className="text-sm text-gray-400">Track your favorite stocks</p>
          </div>
         
        </div>
        
        {/* Stock Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {datasets2.map(({ name, data, range }, index) => (
            <div key={name} className="opacity-0 animate-fade-in" style={{ animationDelay: `${500 + index * 100}ms` }}>
              <Charts 
                getData={data} 
                name={name} 
                range={range}
                sessionKey={sessionKey}
              />
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-[#334155] opacity-0 animate-fade-in" style={{ animationDelay: "1100ms" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>Data refreshes every 5 seconds • Prices are indicative</p>
            <p className="font-mono">Last updated: {new Date().toLocaleTimeString("en-IN")}</p>
          </div>
        </footer>
      </div>
      
      {/* Render the Popup with the current message */}
      <Popup visible={popupVisible} message={currentMessage} />
    </div>
  );
};

export default Session3;





