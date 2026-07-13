import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

//useRef hook
const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*(){}[]~`"

    for (let i = 0; i < length; i++) {
      const ch = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ch)
    }
    
    setPassword(pass)

  }, [length, num, char, setPassword])
  // here setPassword is only responsible for memorization 

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current.select();
    // passwordRef.current.setSelectionRange(0,3); //it selects in given range
    window.navigator.clipboard.writeText(password)
  },[password])

 useEffect(()=>{
  passwordGenerator()
 },[length, num, char, passwordGenerator])


  return (
    <div>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>PasswordGenerator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div  className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
        </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={num}
            id='numberInput'
            onChange={() => {
              setNum((prev) => !prev);
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
           <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={char}
            id='characterInput'
            onChange={() => {
              setChar((prev) => !prev);
            }}
            />
            <label htmlFor='numberInput'>Characters</label>
          </div>
      </div>
      </div>
    </div>
  )
}

export default App
