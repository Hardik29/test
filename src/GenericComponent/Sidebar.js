import React from 'react';
import Lumos from '../assest/Lumos.png';
import amazon from '../assest/amazon.png';
import buidl from '../assest/buidl.png';
import logBackground from '../assest/logBackground.png';
import planet from '../assest/planet.png'

function Sidebar() {
    return (
        <div className='flex bg-[#160635] h-screen justify-center item-center font-InterRegular'>
            <div className='flex mt-24 flex-col'>
                <img src={Lumos} className='w-36 h-12'/>
                <div className='tracking-[0.2rem] text-sm text-[#D3D3D3] ml-4'>HACKATHON</div>
            </div>
            <img src={buidl} className='absolute w-96 mt-36' />
            <div className='absolute mt-[28rem] flex flex-row space-x-8'>
                <div className='flex justify-center '>
                    <span className='text-sm text-[#FFFFFF] tracking-[-0.015rem]'>Presented by</span>
                    <img src={Lumos} className='w-20 h-6' />
                </div>
                <div className='flex justify-center space-x-4'>
                    <span className='text-sm text-[#FFFFFF] tracking-[-0.015rem]'>Powered by</span>
                    <img src={amazon} className='w-12 h-6' />
                </div>
            </div>
            {/* <img src={logBackground} className='absolute ml-5 w-screen lg:w-2/5 h-screen' /> */}
        </div>
    )
}

export default Sidebar
