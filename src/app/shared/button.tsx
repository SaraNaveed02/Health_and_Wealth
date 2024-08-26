import React, { FC } from 'react'

const Button:FC<{text:string}> = ({text}) => {
  return (
    <div className='mb-7'>
        <button className="bg-[#e6a900] shadow-lg font-semibold text-white text-md rounded-full py-2 px-2 hover:scale-105 hover:bg-black duration-300  ">{text}</button>
        </div>
  )
}

export default Button
