import { useState } from 'react'    //hooks
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'

function App() {

  let [counter, setCounter] = useState(15) // it is used to create state variable in functional component

  //let counter = 15

  const addValue = () => {
    if (counter <25){
      // counter = counter + 1
      // setCounter(counter + 1)    //for single update
      
      // setCounter(counter = counter + 1)  
      // it will work for multiple updates but it mutate variable
      
      setCounter(counter => counter + 1)    
      // it is used for multiple updates and it is widely used and it depends on previous state
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
    }

  }
  const removeValue = () => {
    if (counter >0){
    counter = counter - 1
    setCounter(counter)
    }

  }
  return (
    <>
    <h1>Counter App by Kaushal</h1>
    <h2>count value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >remove value {counter}</button>
    <p> footer: {counter}</p>
    </>
  )
}

export default App
