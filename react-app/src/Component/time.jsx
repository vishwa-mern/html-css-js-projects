import { useState, useEffect } from "react";
import ConditionalRendering from "./conditionalrendering";


function Time() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 100);
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Time: {time}</h1>
      <ConditionalRendering />
    </div>
  );
}

export default Time;


