import React, { useState, useEffect } from 'react';
import GenericInputBox from '../GenericComponent/GenericInputBox';
import GenericSelectBox from '../GenericComponent/GenericSelectBox';
import cityJson from '../utils/city.json';
import { countryList } from '../utils/list';

function TeamMemberDetials({ memberIndex, arr }) {
    
    const [country, setCountry] = useState('Afghanistan');
    const [cityList, setCityList] = useState([]);

    useEffect(() => {
        const city = cityJson.filter((item) => (item.country.toLowerCase() == country.toLowerCase()));
        const res = city.map((item) => ((item.city)))
        setCityList(res)
    }, [country])


    return (
        <div className={`flex flex-col`} >
            <div className='flex flex-col mt-12'>
                <div className='font-bold text-4xl opacity-70'>Member {memberIndex + 1}</div>
            </div>
            <GenericInputBox onChange={(e)=>{arr[memberIndex].memberName = (e.target.value)}} labelName='Name' notBlank={true} />
            <div className='flex flex-row space-x-2'>
                <GenericInputBox onChange={(e)=>{arr[memberIndex].contactNumber = (e.target.value)}} labelName='Contact Numer' width={'w-[20rem]'} notBlank={true} type={'tel'} pattern={"[0-9]{10}"} />
                <GenericInputBox onChange={(e)=>{arr[memberIndex].dob = (e.target.value)}} labelName='DOB' width={'w-[20rem]'} notBlank={true} type={'date'} />
            </div>
            <div className='flex flex-row space-x-2'>
                {console.log(arr)}
                <GenericSelectBox onChange={setCountry} labelName='Country' notBlank={true} options={countryList} width={'w-[20rem]'} onChnage={setCountry} />
                <GenericSelectBox labelName='City' notBlank={true} options={cityList} width={'w-[20rem]'} />
            </div>
        </div>
    )
}

export default TeamMemberDetials;