import React from 'react'

function GenricButtonSecondary({icon, onClick}) {
  return (
    <button onClick={onClick} className="border-2 rounded h-max p-[0.37rem] w-max mt-2 flex items-center justify-center hover:bg-black hover:text-white">{icon}</button>
  )
}

export default GenricButtonSecondary