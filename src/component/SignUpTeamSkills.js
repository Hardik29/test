import React, { useState } from 'react';
import skillJson from '../utils/skills.json';
import { profileList } from '../utils/list';
import GenericInputSelectBox from '../GenericComponent/GenericInputSelectBox';
import GenericCheckBox from '../GenericComponent/GenericCheckBox';

function TeamSkills({count}) {
    const skill = skillJson.map((skill) => (skill.name))

    const [membersCheck, setMembersCheck] = useState(true)

    return (
        <div className='mb-4 mt-8 rounded'>
            <div className='h-[0.01rem] bg-black w-96 border-2 opacity-60'></div>
            <GenericCheckBox labelName={'Do you need more members ? '} req={true} setMembersCheck={setMembersCheck} />
            {membersCheck &&
                <>
                    <div className='flex flex-col mt-6 text-[#2D2D2D] item-center'>
                        <div className='text-sm'>Members Required <span className='text-xs text-gray-500'>{`( max members ${3 - count})`}</span></div>
                        <input className={`border-2 rounded h-8 p-1`} />
                    </div>
                    <GenericInputSelectBox labelName='Skills' option={skill} />
                    <GenericInputSelectBox labelName='What would skills you like in teammate ?' option={profileList} />
                </>
            }
            <div className='h-[0.01rem] bg-black w-96 border-2 opacity-60 mt-8'></div>
        </div>
    )
}

export default TeamSkills