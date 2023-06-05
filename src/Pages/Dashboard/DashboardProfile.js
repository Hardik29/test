import React, { useState, useEffect } from 'react';
import GenericDashboardSidebar from '../../GenericComponent/GenericDashboardSidebar';
import GenericInputBox from '../../GenericComponent/GenericInputBox';
import { countryList } from '../../utils/list';
import cityJson from '../../utils/city.json';
import GenericSelectBox from '../../GenericComponent/GenericSelectBox';
import { genderList } from '../../utils/list';



function DashboardProfile() {
    const [country, setCountry] = useState('Afghanistan');
    const [cityList, setCityList] = useState([]);
    useEffect(() => {
        const city = cityJson.filter((item) => (item.country.toLowerCase() == country.toLowerCase()));
        const res = city.map((item) => ((item.city)))
        setCityList(res)
    }, [country])
    return (
        <div className='flex flex-col lg:flex-row'>
            <aside class="sticky top-0 w-screen lg:w-1/5 h-screen">
                <GenericDashboardSidebar />
            </aside>
            <main className='flex flex-col mt-20 ml-24'>
                <div className='flex flex-col'>
                    <div className='text-3xl font-BrinnanBold'>Profile Setting</div>
                    <div className="border-b w-[52rem] border-[#9D9D9D] flex flex-row pb-8 lg:pb-0 items-center mt-4"></div>
                    <div className="lg:basis-1/4 flex mt-4">
                        <div className='flex flex-col items-center'>
                            <img
                                src={`https://avatars.dicebear.com/api/personas/${'John' || "placeholder"
                                    }.svg?size=96`}
                                alt=""
                                srcset=""
                                className='w-20 h-20 rounded-full bg-yellow-200'
                            />
                            <div className="pt-5">
                                <h3 className="hover:underline pointer">Change</h3>
                            </div>
                        </div>
                        <div className='border border-[#9D9D9D] h-screen opacity-50 ml-12'></div>
                        <div className="flex flex-col ml-12 justify-around">
                            <GenericInputBox labelName='Display Name' placeholder="John Doe" width='w-full' />
                            <GenericInputBox labelName='Bio .' height='h-[12rem]' />
                            <div className='flex flex-row space-x-2'>
                                <GenericInputBox labelName='Email ID' placeholder="John Doe@lumoslabs.co" width={'w-[20rem]'} />
                                <GenericInputBox labelName='Contact Number' type={'tel'} pattern={"[0-9]{10}"} width={'w-[20rem]'} />
                            </div>
                            <div className='flex flex-row space-x-2'>
                                <GenericSelectBox labelName='Country' options={countryList} onChange={setCountry} width={'w-[20rem]'} />
                                <GenericSelectBox labelName='City' options={cityList} width={'w-[20rem]'} />
                            </div>
                            <div className='flex flex-row space-x-2'>
                                <GenericInputBox labelName='DOB' type={'date'} width={'w-[20rem]'} />
                                <GenericSelectBox labelName='Gender' options={genderList} width={'w-[20rem]'} />
                            </div>
                            <GenericInputBox labelName='Wallet Address' placeholder="0X123WEW51A2SDA5DF4AS2F" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default DashboardProfile;