import React, { useState, useEffect, useMemo } from "react";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import MarketSummary from "./components/MarketSummary";
import Charts from "./Charts";


const Session1 = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [screen,setScreen]=useState(true)
 
  const [popupCount, setPopupCount] = useState(0);
  const [button,setButton]=useState(false);
  const navigate = useNavigate() // Track the number of times the popup is shown

  // Define the messages for each time slot
  const timeSlotMessages = [
    { time: 0, message: "Session 1 is starting now. Please wait for the data to load." },
    { time: 1, message: "Zomato remains in focus as investors assess recent management commentary on cost structures alongside steady order trends." },
    { time: 2, message: "Maruti Suzuki indicates stable production conditions, though margin sensitivity to input costs continues to be monitored." },
    { time: 3, message: "Policy-related discussions around port-linked logistics infrastructure draw investor attention to the infrastructure space." },
    { time: 4, message: "Food delivery stocks witness heightened scrutiny as market participants reassess near-term profitability assumptions." },
  ];

  // SESSION 1 - OPENING & DISCOVERY PHASE
  const datasets = useMemo(() => [
    {
      name: "Zomato",
      data: [
        { time: 0, price: 200.0 },
        { time: 1, price: 198.0 },
        { time: 2, price: 194.0 },
        { time: 3, price: 196.0 },
        { time: 4, price: 194.0 },
        { time: 5, price: 193.0 },
        { time: 6, price: 192.0 },
        { time: 7, price: 192.0 },
        { time: 8, price: 182.0 },
        { time: 9, price: 181.0 },
        { time: 10, price: 180.0 },
      ],
      range: 0.15,
    },
    {
      name: "ITC",
      data: [
        { time: 0, price: 450.0 },
        { time: 1, price: 448.0 },
        { time: 2, price: 450.0 },
        { time: 3, price: 449.5 },
        { time: 4, price: 450.0 },
        { time: 5, price: 448.5 },
        { time: 6, price: 446.0 },
        { time: 7, price: 445.2 },
        { time: 8, price: 446.0 },
        { time: 9, price: 450.5 },
        { time: 10, price: 455.0 },
      ],
      range: 0.4,
    },
    {
      name: "Adani Ports",
      data: [
        { time: 0, price: 800.0 },
        { time: 1, price: 801.5 },
        { time: 2, price: 800.0 },
        { time: 3, price: 802.0 },
        { time: 4, price: 800.0 },
        { time: 5, price: 812.0 },
        { time: 6, price: 824.0 },
        { time: 7, price: 823.2 },
        { time: 8, price: 824.0 },
        { time: 9, price: 820.0 },
        { time: 10, price: 816.0 },
      ],
      range: 0.25,
    },
    {
      name: "Maruti Suzuki",
      data: [
        { time: 0, price: 10000.0 },
        { time: 1, price: 10015.0 },
        { time: 2, price: 10000.0 },
        { time: 3, price: 10020.0 },
        { time: 4, price: 10100.0 },
        { time: 5, price: 10080.0 },
        { time: 6, price: 9999.0 },
        { time: 7, price: 9985.0 },
        { time: 8, price: 9999.0 },
        { time: 9, price: 9890.0 },
        { time: 10, price: 9799.0 },
      ],
      range: 0.15,
    },
    {
      name: "Bharti Airtel",
      data: [
        { time: 0, price: 1000.0 },
        { time: 1, price: 998.5 },
        { time: 2, price: 1000.0 },
        { time: 3, price: 999.0 },
        { time: 4, price: 1000.0 },
        { time: 5, price: 995.0 },
        { time: 6, price: 990.0 },
        { time: 7, price: 988.5 },
        { time: 8, price: 990.0 },
        { time: 9, price: 985.0 },
        { time: 10, price: 980.0 },
      ],
      range: 0.15,
    },
  ],[]);
  
  const [sessionKey] = useState(Date.now());

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

  const changeSession =()=>{
    const audio = new Audio('/sound.mp3');
    audio.play().catch(err => console.log('Audio play failed:', err));

    navigate('/session2')
  }

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
          {datasets.map(({ name, data, range }, index) => (
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

export default Session1;





