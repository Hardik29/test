import React, { useState, useEffect} from 'react';
import Sidebar from '../GenericComponent/Sidebar';
import GenericInputBox from '../GenericComponent/GenericInputBox';
import GenricButtonSecondary from '../GenericComponent/GenricButtonSecondary';
import GenericButtonPrimary from '../GenericComponent/GenericButtonPrimary';
import TeamMemberDetials from '../component/SIgnUpTeamMemberDetials';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiSubtractFill } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
import TeamSkills from '../component/SignUpTeamSkills';



function SignUpTeam() {
    const [count, setCount] = useState(0);
    const [submittedProfile, setSubmittedProfile] = useState(0)
    const elementMemberProfile = [];
    const navigate = useNavigate();
    const arrMemberJSON = [];
    const newMemberJSON = {
        'memberName' : '',
        'contactNumber' : '',
        'dob' : '',
        'country' : '',
        'city' : '',
    }

    const handelIncrement = () => {
        if (count < 3) {
            setCount(count => count + 1)
            setSubmittedProfile(submittedProfile => submittedProfile + 1);
        }
        else {
            toast.warning('max 4 members', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    const handelDecrement = () => {
        { count > 0 && setCount(count => count - 1) }
        { submittedProfile > 0 && setSubmittedProfile(submittedProfile => submittedProfile - 1); }
    }

    for (let i = 0; i < count; i++) {
        elementMemberProfile.push(<div key={i}><TeamMemberDetials memberIndex={i} arr={arrMemberJSON}/></div>);
    }
    
    for (let i = 0; i < count; i++) {
        arrMemberJSON.push(newMemberJSON);
      }

    return (
        <div className='flex flex-col lg:flex-row'>
             <aside class="sticky top-0 w-screen lg:w-2/5 h-screen">
                <Sidebar />
            </aside>
            <ToastContainer />
            <main className='flex flex-col ml-24'>
                <div className='flex flex-col'>
                    <div className='flex flex-col mt-24'>
                        <div className='font-bold text-4xl opacity-70'>Team Details</div>
                    </div>
                    <GenericInputBox labelName='Team Name' />
                    <div className='text-sm mt-4'>Total Team Member<span className='opacity-50'> (max 4)</span></div>
                    <div className='flex flex-row space-x-2 items-center'>
                        <GenricButtonSecondary icon={<AiOutlinePlus />} onClick={handelIncrement} />
                        <input className='border-2 rounded w-[3rem] h-8 p-[0.4rem] mt-2 text-center' value={count} />
                        <GenricButtonSecondary icon={<RiSubtractFill />} onClick={handelDecrement} />
                        <ToastContainer />
                    </div>
                </div>
                <div className=''>
                    {elementMemberProfile}
                    {count !==0 && <GenericButtonPrimary labelName={"Submit"}/>}
                    {count !== 3 && <TeamSkills count={count}/>}
                </div>
            </main>
        </div>
    )
}

export default SignUpTeam