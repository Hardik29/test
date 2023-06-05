import React, { useState, useEffect } from 'react';
import GenericDashboardSidebar from '../../GenericComponent/GenericDashboardSidebar';
import GenericInputBox from '../../GenericComponent/GenericInputBox';
import { profileList } from '../../utils/list';
import GenericSelectBox from '../../GenericComponent/GenericSelectBox';


const TeamProfile = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex felx-col items-center space-x-6 '>
                <div className='flex flex-row items-center text-right mt-6'>
                    <img
                        src={`https://avatars.dicebear.com/api/personas/${'Krishna' || "placeholder"
                            }.svg?size=96`}
                        alt=""
                        srcset=""
                        className='w-12 h-12 rounded-full bg-yellow-200'
                    />
                </div>
                <div className='flex flex-col mr-2 text-xs mt-6'>
                    <div className='font-BrinnanBold text-lg'>Krishna Reddy</div>
                    <div className='text-ellipsis overflow-hidden'>Backend Developer</div>
                </div>
            </div>
            <div className='mt-6'>
                <GenericSelectBox width={'w-[12rem]'} options={profileList} />
            </div>
        </div>
    )
}

function DashboardTeam() {
    return (
        <div className='flex flex-col lg:flex-row'>
            <aside class="sticky top-0 w-screen lg:w-1/5 h-screen">
                <GenericDashboardSidebar />
            </aside>
            <main className='flex flex-col ml-24 mt-20 mb-6'>
                <div className='flex justify-between items-center space-x-[30rem]'>
                    <div className='font-BrinnanBold text-3xl'>Team</div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row items-center text-right'>
                            <div className='flex flex-col mr-2 text-xs'>
                                <div>John Doe</div>
                                <div className='text-ellipsis overflow-hidden'>0xwe165e6e1r64e58f1rf489rcre</div>
                            </div>
                            <img
                                src={`https://avatars.dicebear.com/api/personas/${'John' || "placeholder"
                                    }.svg?size=96`}
                                alt=""
                                srcset=""
                                className='w-12 h-12 rounded-full bg-yellow-200'
                            />
                        </div>
                    </div>
                </div>
                <div className="border-b w-[58rem] border-[#9D9D9D] pb-8 lg:pb-0 items-center mt-4"></div>
                <div>
                    <div className='mt-4 h-40 items-center p-4 rounded border-2 border-[#000000] border-dotted bg-[#F8F8F8]'>
                        <div className='text-xs ml-4'>
                            <div className=''>
                                <div className='text-xl font-BrinnanBold mb-2'>Invite Your Team</div>
                                To invite another member to join your team (max 4 members), please send them the following invite token:
                            </div>
                        </div>
                        <div className='ml-4 flex items-center space-x-4'>
                            <GenericInputBox width={'w-[15rem]'} placeholder={'https://ethglobal.com/auth'} />
                            <button className=' border-2 border-[#CBCBCB] text-[#2D2D2D] px-4 rounded-md mt-6'>Copy</button>
                        </div>
                    </div>
                    <div className='mt-10 flex flex-col'>
                        <div className='font-BrinnanBold text-2xl'>Knights</div>
                        <TeamProfile />
                        <div className="border-b w-[60rem] border-[#9D9D9D] flex flex-row pb-8 lg:pb-0 items-center mt-4"></div>
                        <TeamProfile />
                        <div className="border-b w-[60rem] border-[#9D9D9D] flex flex-row pb-8 lg:pb-0 items-center mt-4"></div>
                        <TeamProfile />
                        <div className="border-b w-[60rem] border-[#9D9D9D] flex flex-row pb-8 lg:pb-0 items-center mt-4"></div>
                        <div className='flex justify-between items-center'>
                            <div className='flex felx-col items-center space-x-6 '>
                                <div className='text-center mt-6 rounded-full border-2 w-10 h-10 text-3xl pt-[0.1rem]'>+</div>
                                <div className='flex flex-col mr-2 text-xs mt-6'>
                                    <div className='font-BrinnanBold text-lg'>Add team members</div>
                                </div>
                            </div>
                            <div className='mt-6'>
                            <input className={`border-2 rounded h-8 p-1`} placeholder='Team Mate Finder'/>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default DashboardTeam