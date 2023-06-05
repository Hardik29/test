import React from 'react'

function GenericButtonPrimary({labelName}) {
  return (
    <button className='bg-[#36104C] h-12 w-40 mt-10 rounded text-white hover:bg-white hover:text-[#36104C] hover:border-2 hover:border-[#36104C]'>{labelName}</button>
  )
}

export default GenericButtonPrimary