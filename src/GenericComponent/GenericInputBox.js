import React from 'react'

function GenericInputBox({ labelName, width, height, notBlank = false, type = 'text', onChange, onkeydown, value, pattern, placeholder }) {
    return (
        <div className='flex flex-col mt-6 text-[#2D2D2D]'>
            <div className='text-sm'>{labelName}<span className='text-red-500'>{notBlank ? ' *' : ''}</span></div>
            <input className={`border-2 rounded ${width} ${height} h-8 p-1`} type={type} onChange={onChange} onKeyDown={onkeydown} value={value} pattern={pattern} placeholder={placeholder} />
        </div>
    )
}

export default GenericInputBox;