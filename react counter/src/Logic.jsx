import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //   const handleClick = () => {
  //     setCount(count + 1);
  //   };
  return (
    <>
      <div className="App">
        <p>{count} </p>
        <button onClick={() => setCount((count) => count + 1)}>
          {" "}
          increase count by 1
        </button>
      </div>
      <div className="App">
        <p>{count} </p>
        <button onClick={handleClick}> increase count by 5</button>
      </div>
      <div className="App">
        <p>{count} </p>
        <button onClick={handleClick}> increase count by 10</button>
      </div>
      <div className="App">
        <p>{count} </p>
        <button onClick={handleClick}> increase count by 100</button>
      </div>
    </>
  );
}

export default App;
