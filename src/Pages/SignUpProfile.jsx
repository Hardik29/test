import React, { useEffect, useState } from 'react';
import Sidebar from '../GenericComponent/Sidebar';
import GenericInputBox from '../GenericComponent/GenericInputBox';
import GenericSelectBox from '../GenericComponent/GenericSelectBox';
import { countryList } from '../utils/list';
import { genderList } from '../utils/list';
import { profileList } from '../utils/list';
import GenericInputSelectBox from '../GenericComponent/GenericInputSelectBox';
import cityJson from '../utils/city.json';
import skillJson from '../utils/skills.json';
import { useNavigate } from "react-router-dom";


function SignUpProfile() {

    const [country, setCountry] = useState('Afghanistan');
    const [cityList, setCityList] = useState([]);
    const [phnNumber, setPhnNumber] = useState();
    const [dob, setDob] = useState();
    const [city, setCity] = useState();
    const [gender, setGender] = useState();
    const [clg, setClg] = useState();
    const [year, setYear] = useState();
    const [skills, setSkills] = useState();
    const [profile, setprofile] = useState();

    const navigate = useNavigate();

    const skill = skillJson.map((skill) => (skill.name))

    useEffect(() => {
        const city = cityJson.filter((item) => (item.country.toLowerCase() == country.toLowerCase()));
        const res = city.map((item) => ((item.city)))
        setCityList(res)
    }, [country])

    const handleSubmit = () => {
        navigate('/signupteam')
    }

    return (
        <div className='flex flex-col lg:flex-row'>
            <aside class="sticky top-0 w-screen lg:w-2/5 h-screen">
                <Sidebar />
            </aside>
            <main className='flex flex-col ml-24'>
                <div className='flex flex-col'>
                    <div className='flex flex-col mt-24'>
                        <div className='font-bold text-4xl opacity-70'>Basic Form</div>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <GenericInputBox labelName='Contact Number' notBlank={true} type={'tel'} pattern={"[0-9]{10}"} onClick={(e)=>{setPhnNumber(e.target.value)}} width={'w-[20rem]'}/>
                        <GenericInputBox labelName='DOB' type={'date'} onClick={(e)=>{setDob(e.target.value)}} width={'w-[20rem]'}/>
                    </div>
                    <GenericSelectBox labelName='Gender' options={genderList} onChange={(e)=>{setGender(e.target.value)}} />
                    <div className='flex flex-row space-x-2'>
                        <GenericSelectBox labelName='Country' notBlank={true} options={countryList} onChange={setCountry} width={'w-[20rem]'}/>
                        <GenericSelectBox labelName='City' notBlank={true} options={cityList} width={'w-[20rem]'} />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col mt-12'>   
                        <div className='font-bold text-4xl opacity-70'>Education</div>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <GenericInputBox labelName='College' width={'w-[20rem]'} notBlank={true} onClick={(e)=>{setClg(e.target.value)}}/>
                        <GenericInputBox labelName='Year' width={'w-[20rem]'} notBlank={true} type={'date'} onClick={(e)=>{setYear(e.target.value)}}/>
                    </div>
                    <GenericInputSelectBox labelName='Skills' option={skill} />
                    <GenericSelectBox labelName='What would you consider yourself ?' options={profileList} />
                    <button className='bg-[#36104C] h-12 w-40 mt-10 rounded text-white hover:bg-white hover:text-[#36104C] hover:border-2 hover:border-[#36104C]' onClick={handleSubmit}>Next</button>
                </div>
            </main>
        </div>
    )
}

export default SignUpProfile