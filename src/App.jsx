import { useState,useEffect,useCallback,useRef } from 'react'
import Navbar from './components/Navbar'

function App() {
// states
  const [password,setpassword] = useState("")
  const [length,setlength] = useState(6)
  const [numbers,setnumbers] = useState(false)
  const [characters,setcharacters] = useState(false)

  // useref to let user know password is copied
  const btnref = useRef(null)

// change in range function
  const handlechange = (e) =>{
    const value = e.target.value
    setlength(value)
  }

// copy text button function
  const copytexttoboard = (e) =>{
    window.navigator.clipboard.writeText(password)
    btnref.current.textContent = "Copied!"
  }

// Runs the function on every change in lenght,numbers,characters
  useEffect(() => {
    GeneratePassword()
  }, [length,numbers,characters])


// Generates the Password (main function)
  const GeneratePassword = useCallback(() =>{
    btnref.current.textContent = "Copy"
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const specialchar = "!#$*/?@[{|}()!#$*/?@[{|}()!#$*/?@[{|}()!#$*/?@[{|}()!#$*/?@[{|}()"
    const numerics = "012345678912345678912345678901234567891234567890123456789098"

    if(numbers){
      letters += numerics
    }

    if(characters){
      letters += specialchar
    }

    let result = ""
    for(let i = 1; i <= length; i++){
      const randomvalue = Math.floor(Math.random()*letters.length)
      result += letters[randomvalue]
    }
    setpassword(result)
  },[length,numbers,characters])
  
  
  
  return (
    <>
    <Navbar />
      <div className='flex justify-center items-center h-150 flex-col'>
       <h1 className='text-6xl text-blue-300 mb-8'>Password Generator</h1>
       <div>
        <label className='text-white text-2xl'>Password
          <input 
          type='text' 
          name='pass'
          value={password}
          readOnly
          className='border-stone-400 border-1 border-solid ml-3 mr-3 pl-2 w-80 py-2 rounded-md'
          />
          <button 
          title='Copy text to clipboard'
          onClick={()=>{
            // alert("Copied to Clipboard")
            copytexttoboard()
          }} 
          ref={btnref}
          className='border-solid border-1 border-stone-400 px-8 py-2 rounded-md'>Copy</button>
        </label>
       </div>
       <div className='mt-10'>
        <label className='label'>
          Length : {length}
          <input 
          title='set your password size range'
          className='ml-4'
          min={6}
          max={30}
          onChange={handlechange}
          value={length}
          type='range'
          />
        </label>

        <label className='label'>
          Numbers
          <input 
          title='add numbers'
          className='ml-2'
          onChange={()=>{
            setnumbers((prev) => !prev)
          }}
          type='checkbox'
          />
        </label>

        <label className='label'>
          Characters
          <input 
          title='add special characters'
          className='ml-2'
          type='checkbox'
          onChange={()=>{
            setcharacters((prev)=>!prev)
          }}
          />
        </label>
       </div>
      </div>
    </>
  )
}

export default App
