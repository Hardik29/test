import React from 'react'

function GenericSelectBox({labelName, notBlank, width,  options, onChange}) {
    return (
        <div className="relative flex mt-6 flex-col">
        <div className='text-sm'>{labelName}<span className='text-red-500'>{notBlank ? ' *' : ''}</span></div>
        <select onChange={(e) => onChange(e.target.value)} className={`rounded text-gray-600 h-8 ${width} border-2 pr-10 focus:outline`} >
            { options.map((item)=>(
               <option>{item}</option> 
            ))}
        </select>
    </div>
    )
}

export default GenericSelectBox 