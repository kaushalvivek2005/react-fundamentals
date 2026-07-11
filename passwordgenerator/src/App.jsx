import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*(){}[]~`"

    for (let i = 0; i < array.length; i++) {
      const ch = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(ch)
    }
    
    setPassword(pass)

  }, [length, num, char, setPassword])

  return (
    <div>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>PasswordGenerator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        />
      <button className=''>copy</button>
      </div>
      </div>
    </div>
  )
}

export default App
