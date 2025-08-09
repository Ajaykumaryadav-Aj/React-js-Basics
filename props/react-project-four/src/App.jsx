
import './App.css'
import Card from './components/card';
import Button from './components/Button';
import { useState } from 'react';


function App() {
  const [count,setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
  }
  return (
    <div>
    <Button handleClick={handleClick} text = 'click me'>
      
      <h1>{count}</h1>
    </Button>
     {/* {<Card name="Ajay Kumar">
<h1>This is my first code for props</h1>
<p>Trying to be consistent in this</p>
<p>Will complete the course</p>
     </Card>
     <Card children="main hu children">
      
     </Card>} */}
    </div>
  )
}

export default App
