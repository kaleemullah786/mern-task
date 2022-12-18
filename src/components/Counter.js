import React from 'react'
import { useState} from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount((prev) => { return prev + 1 })
  }
  
  function handleDecrement() {
    setCount((prev) => { return prev - 1 })
  }

  return (
    <div className='flex justify-around flex-wrap mx-auto rounded-xl shadow-lg w-1/3 p-4 bg-orange-100'>
      <button className='btn p-4 w-[70px] h-[70px] shadow-md  bg-green-50 rounded-full text-4xl font-bold' onClick={handleIncrement}>+</button>
      <h1 className='bg-red-100 text-6xl shadow-md font-mono font-bold mt-4 flex rounded-full w-[150px] h-[150px] justify-center items-center text-gray-700'><span id='count'>{count}</span></h1>
      <button className='btn p-4 w-[70px] h-[70px] shadow-md  bg-green-50 rounded-full text-4xl font-bold' onClick={handleDecrement}>-</button>
    </div>
  )
}
export default Counter

