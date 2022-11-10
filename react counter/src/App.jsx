import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [countFive, setCountFive] = useState(0);
  const [countTen, setCountTen] = useState(0);
  const [countHundred, setCountHundred] = useState(0);

  return (
    <>
      <div className="main-container">
        <div className="one">
          <p>{count} </p>
          <button onClick={() => setCount((count) => count + 1)}>
            {" "}
            increase count by 1
          </button>
        </div>
        <div className="two">
          <p>{countFive} </p>
          <button onClick={() => setCountFive((countFive) => countFive + 5)}>
            {" "}
            increase count by 5
          </button>
        </div>
        <div className="three">
          <p>{countTen} </p>
          <button onClick={() => setCountTen((countTen) => countTen + 10)}>
            {" "}
            increase count by 10
          </button>
        </div>
        <div className="four">
          <p>{countHundred} </p>
          <button
            onClick={() =>
              setCountHundred((countHundred) => countHundred + 100)
            }
          >
            increase count by 100
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
