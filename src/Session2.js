import React, { useState, useEffect, useMemo } from "react";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import MarketSummary from "./components/MarketSummary";
import Charts from "./Charts";

const Session2 = () => {
  const [popupVisible, setPopupVisible] = useState(true);
  const [screen,setScreen]=useState(true)
 
  const [popupCount, setPopupCount] = useState(0);
  const [button,setButton]=useState(false);
  const navigate=useNavigate() // Track the number of times the popup is shown

  // Define the messages for each time slot
  const timeSlotMessages = [
    { time: 0, message: "Session 2 is starting now. Please wait for the data to load." },
    { time: 1, message: "Domestic equities trade cautiously as participants factor in mixed global market signals." },
    { time: 2, message: "Zomato remains under watch as investors evaluate recent strategic initiatives in adjacent business segments." },
    { time: 3, message: "FMCG stocks see rising volatility as investors reassess defensive positioning amid broader market uncertainty." },
    { time: 4, message: "Infrastructure stocks trade mixed as institutional activity is observed across select names." },
  ];

  // Memoize the datasets to prevent reference changes on each render
  useEffect(() => {
    setTimeout(() => setPopupVisible(false), 10000);
  }, []);
  

  // SESSION 2 - MIDDAY ADJUSTMENT PHASE
  const datasets1 = useMemo(() => [
    {
      name: "Zomato",
      data: [
        { time: 0, price: 180.0 },
        { time: 1, price: 179.2 },
        { time: 2, price: 178.0 },
        { time: 3, price: 178.5 },
        { time: 4, price: 185.0 },
        { time: 5, price: 184.2 },
        { time: 6, price: 185.0 },
        { time: 7, price: 184.5 },
        { time: 8, price: 185.0 },
        { time: 9, price: 184.0 },
        { time: 10, price: 183.0 },
      ],
      range: 0.15,
    },
    {
      name: "ITC",
      data: [
        { time: 0, price: 455.0 },
        { time: 1, price: 453.5 },
        { time: 2, price: 450.0 },
        { time: 3, price: 451.0 },
        { time: 4, price: 450.0 },
        { time: 5, price: 452.5 },
        { time: 6, price: 464.0 },
        { time: 7, price: 463.2 },
        { time: 8, price: 464.0 },
        { time: 9, price: 461.5 },
        { time: 10, price: 459.0 },
      ],
      range: 0.4,
    },
    {
      name: "Adani Ports",
      data: [
        { time: 0, price: 816.0 },
        { time: 1, price: 814.5 },
        { time: 2, price: 808.0 },
        { time: 3, price: 809.0 },
        { time: 4, price: 808.0 },
        { time: 5, price: 810.5 },
        { time: 6, price: 808.0 },
        { time: 7, price: 816.0 },
        { time: 8, price: 824.0 },
        { time: 9, price: 820.0 },
        { time: 10, price: 816.0 },
      ],
      range: 0.25,
    },
    {
      name: "Maruti Suzuki",
      data: [
        { time: 0, price: 9799.0 },
        { time: 1, price: 9785.0 },
        { time: 2, price: 9701.0 },
        { time: 3, price: 9710.0 },
        { time: 4, price: 9701.0 },
        { time: 5, price: 9685.0 },
        { time: 6, price: 9701.0 },
        { time: 7, price: 9690.0 },
        { time: 8, price: 9701.0 },
        { time: 9, price: 9650.0 },
        { time: 10, price: 9604.0 },
      ],
      range: 0.15,
    },
    {
      name: "Bharti Airtel",
      data: [
        { time: 0, price: 980.0 },
        { time: 1, price: 978.5 },
        { time: 2, price: 970.0 },
        { time: 3, price: 971.0 },
        { time: 4, price: 970.0 },
        { time: 5, price: 968.5 },
        { time: 6, price: 970.0 },
        { time: 7, price: 969.0 },
        { time: 8, price: 970.0 },
        { time: 9, price: 965.0 },
        { time: 10, price: 960.0 },
      ],
      range: 0.15,
    },
  ],[]);
  
  const [sessionKey] = useState(Date.now());

  const changeSession =()=>{
    const audio = new Audio('/sound.mp3');
    audio.play().catch(err => console.log('Audio play failed:', err));

    navigate('/session3')
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
        setButton(true)
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
          {datasets1.map(({ name, data, range }, index) => (
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
        
        {/* Next Session Button */}
        {button && (
          <div className="flex justify-center items-center mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "1000ms" }}>
            <button onClick={changeSession} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors z-50">
              Next Session
            </button>
          </div>
        )}
        
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

export default Session2;





