
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment , reset } from './features/counter/counterSlice';
function App() {

  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement(){
dispatch(increment());
  }

  
  function handleDecrement(){
    dispatch(decrement());
  }

  function handleReset(){
    dispatch(reset());
  }

  return (
<div >
  <button onClick={handleIncrement}>+</button>
  <p>Count:{count}</p>
  <button onClick={handleDecrement}>_</button>
  <br />
  <br />
    <button onClick={handleReset}>Reset</button>

</div>
     
  )
}

export default App
