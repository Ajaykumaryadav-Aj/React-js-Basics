import { useState ,useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";
import Ref from "./component/ref";
// import Ref from "./component/Ref";

function App() {

  const [count, setCount] = useState(0);
  let val = useRef(0)

  let btnRef =  useRef();

function handleIncrement() {
  val.current = val.current + 1;
  console.log("Value of val:", val.current);
  setCount(count + 1);
  
}

  function handleClick() {
    setCount(count+ 1)
  }

  function changelColor() {
    btnRef.current.style.backgroundColor = 'green'
  }

  // its every time render 
  useEffect(() => {
   console.log("main render ho gya hu");
   
  },)
  
  return (
    <div>
       <Ref/>
      {/* <button  ref={btnRef} onClick={handleClick}>Increment</button>
       <br />
    <div>
      Count: {count}
    </div>

    <div>
      <button onClick={changelColor}>
      Change color Increment btn
    </button>
    </div> */}

   

   
    </div>
   
  );
}

export default App;
