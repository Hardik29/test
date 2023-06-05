import React from 'react'

function GenericCheckBox({ labelName, req, setMembersCheck }) {
    return (
        <div className='mt-6 text-[#2D2D2D] text-sm flex flex-row space-x-4'>
            <div>{labelName}<span className='text-red-500'>{req ? ' *' : ''}</span></div>
            <div>
                <input onClick={()=>setMembersCheck(true)} name="membersCheck" type="radio" value={true} />
                <label> Yes </label>
            </div>
            <div>
                <input onClick={() => setMembersCheck(false)} name="membersCheck"  type="radio" value={false} />
                <label> NO </label><br />
            </div>
        </div>
    )
}

export default GenericCheckBox 