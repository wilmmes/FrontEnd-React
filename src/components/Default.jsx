import viteLogo from "../assets/react.svg";
import reactLogo from "../assets/react.svg";
import {useState} from "react";
const Default=()=>{
      const [count, setCount] = useState(0)    
    return(
        <div>
             <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Diplomado en desarrollo Full Stack</h2>
      <h3>Modulo 7 Front End React</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        </div>
    );
};
export default Default;