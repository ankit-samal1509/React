import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(5)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass =""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) string += "0123456789"
    if(charAllowed) string += "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * string.length + 1);

      pass += string.charAt(char)      
    }   
    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPassword = useCallback(() => { 
    passRef.current?.select();                
    passRef.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(password)
  }, [password]) 
  

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (   

    <>    
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-red-500">
            <h1 className='text-white text-center my-3'>Password generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                    type="text"
                    value={password}
                    className="outline-none w-full py-1 px-3 bg-amber-200"
                    placeholder="Password"
                    readOnly
                    ref={passRef}
                />
                <button
                onClick={copyPassword}
                className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-500 active:bg-blue-900'
                >copy</button>
                
            </div>
            <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(Number(e.target.value))}
                  />
                  <label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => {
                      setNumberAllowed((prev) => !prev);
                  }}
              />
              <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input
                      type="checkbox"
                      defaultChecked={charAllowed}
                      id="characterInput"
                      onChange={() => {
                          setCharAllowed((prev) => !prev )
                      }}
                  />
                  <label htmlFor="characterInput">Characters</label>
              </div>
            </div>
        </div>                 

    </>
  )
}

export default App
