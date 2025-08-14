import { useEffect, useState } from "react"


function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

// first -> side -effect function
// second -> clean-up function
// third -> comma seprated dependencies list

// variation : 1
//  useEffect(() => {
//   alert("I will run each render");
//  })
 

// Variation : 2
// that run on only first render
// useEffect(() => {
//   alert("I will run  on only 1st render");

 
// }, [])



// Variation: 3
// useEffect(() => {
// alert("I will run every time when count is updated")
// }, [count])


// Variation: 4
// Multiple dependencies
// useEffect(() => {
 
// alert("I will run every time when count/total is updated")
// }, [count,total])


// Variation: 5 
useEffect(() => {
  alert("Count is updated")

  return () => {
    alert("count is unmounted from UI");
  }
}, [count])


 function handleClick() {
  setCount(count+1,)
 }
 
 function handleClickTotal() {
  setTotal(total+1)
 }
  return (
    <div >
     <button onClick={handleClick}>Update Count</button>
     <br />
     Count : {count}
     <br />
      <button onClick={handleClickTotal}>Update Total</button>
     <br />
     Total : {total}
    </div>
  )
}

export default App
