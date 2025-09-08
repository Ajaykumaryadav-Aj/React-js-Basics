
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import ChildComponents from './components/ChildComponents';

function App() {

  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
     <button onClick={handleClick}>
      increment
     </button>
    <div>Count:{count }</div>
    <div>
      <ChildComponents buttonName='Click me' handleClick={handleClick} />
    </div>
    </div>
  )
}

export default App
