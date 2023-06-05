import React, { useState, useEffect } from 'react';
import GenericDashboardSidebar from '../../GenericComponent/GenericDashboardSidebar';
import { MdWarning } from 'react-icons/md';


function DashboardHome() {
    return (
        <div className='flex flex-col lg:flex-row'>
            <aside class="sticky top-0 w-screen lg:w-1/5 h-screen">
                <GenericDashboardSidebar />
            </aside>
            <main className='flex flex-col ml-24 mt-20'>
                <div className='flex justify-between items-center space-x-[30rem]'>
                    <div className='font-BrinnanBold text-3xl'>Dashboard</div>
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
                    <div className='mt-12 font-BrinnanBold text-4xl'>😊 Welcome, John Doe</div>
                    <div className='font-InterRegular text-xs mt-[0.5rem]'>The hacker dashboard is your digital hub for this event. Read announcements, submit, projects, create teams and find any other info you need.</div>
                    <div className='bg-[#FFD4AC] mt-4 h-20 items-center flex justify-between p-4 rounded-lg'>
                        <div className='flex items-center'>
                            <div className='text-[#FF3737] text-3xl'><MdWarning /></div>
                            <div className='text-xs ml-4'>To claim prize money, NFTs and exciting rewards, connect your wallet now.</div>
                        </div>
                        <button className='border-2 border-[#2D2D2D] bg-[#F7F7F7] p-2'>Connect your Wallet</button>
                    </div>
                    <div className='mt-4 h-40 items-center flex justify-between p-4 rounded-lg border-2 border-[#AFAFAF]'>
                        <div className='flex items-center'>
                            <div className='text-xs ml-4'>
                                <div className='w-96'>
                                    <div className='text-xl font-BrinnanBold mb-2'>Status</div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                </div>
                            </div>
                        </div>
                        <button className='dashboardLaunch bg-[#F7F7F7] p-2 h-24 w-80 rounded-lg text-white text-left pl-6'>Launching Soon</button>
                    </div>
                    <div className='mt-4 h-40 flex p-4 rounded-lg border-2 border-[#AFAFAF]'>
                        <div className='text-xs ml-4'>
                            <div className='w-96'>
                                <div className='text-xl font-BrinnanBold mb-2'>My Tracks (06)</div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='text-xl'>Coming Soon</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default DashboardHome