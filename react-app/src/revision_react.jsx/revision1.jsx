import { useRef } from "react";

function Xyz(props) {
  const intervalRef = useRef(0);

  const handleClick = (e) => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      props.setCount((prev) => prev + 1);
    }, 1000); 
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };
  return (
    <div>
      <h1>Revision {props.count}</h1>

      <button onClick={handleClick}>Start</button>
      <br />
      <button onClick={handleStop}>Stop</button>
      
    </div>
  );
}

export default Xyz;