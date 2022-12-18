import React from 'react'
import { useState,useEffect } from 'react';
const Subtractor = () => {
    const SUBTRACTOR = 4;
    const [val, setVal] = useState(0)

    useEffect(() => {
        const btn = document.getElementsByClassName('btn')
        btn[0].addEventListener('click', () => {
            let txt = document.getElementById('count').innerText
            setVal(() => { return SUBTRACTOR- (Number(txt) + 1)  })
        })
        btn[1].addEventListener('click', () => {
            let txt = document.getElementById('count').innerText
            setVal(() => { return SUBTRACTOR - (Number(txt) - 1) })
        })
    }, [])
  return (
      <div className='w-1/4 bg-white rounded-md mx-auto p-3 shadow-md'>
          <h1 className='font-bold'>Subtractor</h1>
          <hr />
          <h3 className='text-xl font-semibold rounded-full bg-gray-100 w-min p-4 ml-auto mt-3'>{SUBTRACTOR}</h3>
          <p className='flex rounded-full bg-gray-700 mx-auto items-center justify-center -mt-12 h-[100px] w-[100px] text-white text-2xl font-semibold'>{val}</p>
      </div>
  )
}
export default Subtractor