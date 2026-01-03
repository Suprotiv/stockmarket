import React, { useState, useEffect, useMemo } from "react";
import Charts from "./Charts";
import Popup from "./Popup";

const App = () => {
  const [popupVisible, setPopupVisible] = useState(false);
 
  const [popupCount, setPopupCount] = useState(0); // Track the number of times the popup is shown

  // Define the messages for each time slot
  const timeSlotMessages = [
    { time: 0, message: "" },
    { time: 1, message: "Zomato remains in focus as investors assess recent management commentary on cost structures alongside steady order trends." },
    { time: 2, message: "Maruti Suzuki indicates stable production conditions, though margin sensitivity to input costs continues to be monitored." },
    { time: 3, message: "Policy-related discussions around port-linked logistics infrastructure draw investor attention to the infrastructure space." },
    { time: 4, message: "Food delivery stocks witness heightened scrutiny as market participants reassess near-term profitability assumptions." },
  ];

  // Memoize the datasets to prevent reference changes on each render
  // SESSION 1 - OPENING & DISCOVERY PHASE
  const datasets = useMemo(() => [],[]);

  // SESSION 2 - MIDDAY ADJUSTMENT PHASE
  const datasets1 = useMemo(() => [],[]);

  // SESSION 3 - CLOSING & SENTIMENT SHIFT
  const datasets2 = useMemo(() => [],[]);
  const [currentDataset,setCuurentDataset]=useState(datasets);
  const [sessionNumber, setSessionNumber] = useState(1);
  const [sessionKey, setSessionKey] = useState(Date.now());

  const handleSessionChange = () => {
    if (sessionNumber === 1) {
      setCuurentDataset(datasets1);
      setSessionNumber(2);
      setSessionKey(Date.now());
    } else if (sessionNumber === 2) {
      setCuurentDataset(datasets2);
      setSessionNumber(3);
      setSessionKey(Date.now());
    } else {
      setCuurentDataset(datasets);
      setSessionNumber(1);
      setSessionKey(Date.now());
    }
  };

  useEffect(() => {
    // Set interval to trigger the popup every 2 seconds
    const intervalId = setInterval(() => {
      if (popupCount < 4) {
        setPopupVisible(true);
        setPopupCount(prev => prev + 1);

        // Hide popup after a short delay (e.g., 1 second)
        setTimeout(() => setPopupVisible(false), 1000);
      } else {
        clearInterval(intervalId);
      }
    }, 3000);

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, [popupCount]);

  // Get the message for the current time slot based on the popup count
  const currentMessage =
    timeSlotMessages[popupCount % timeSlotMessages.length]?.message || "No message";

  return (
    <div>
      <h1>Stock Price Data</h1>
      <button className="text-white" onClick={handleSessionChange}>Change session (Session {sessionNumber})</button>

      {/* Render the Popup with the current message */}
      <Popup visible={popupVisible} message={currentMessage} />

      <div className="flex flex-wrap">
        {currentDataset.map(({ name, data }, index) => (
          <div key={`${name}-${index}`} className="w-[25%] p-1">
            <Charts 
              key={`session-${sessionNumber}-${sessionKey}-${name}-${index}-${data[0]?.price || 0}`} 
              getData={data} 
              name={name}
              sessionKey={`${sessionKey}-${data[0]?.price || 0}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;





