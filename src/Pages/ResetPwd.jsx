import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import GenericPasswordChecker from '../GenericComponent/GenericPasswordChecker';
import Sidebar from '../GenericComponent/Sidebar';
import GenericInputBox from '../GenericComponent/GenericInputBox';

const getTokenandId = (myToken = '123456789') => {
    const token = myToken.split('&')[0]
    const id = myToken.split('=')[1]
    return { token, id }
}

function ResetPwd() {
    const { token } = useParams()
    const ans = getTokenandId(token)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [verified, setVerified] = useState(false)
    const navigate = useNavigate();

    const handlePasswordReq = async (data, headers) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/verifytoken`, data, { headers });
            console.log(res);
            { res && navigate('/signin') }
        }
        catch (err) {
            toast.error(`Something Went Wrong`, err,
                { position: toast.POSITION.TOP_RIGHT });
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            "userId": ans.id,
            "token": ans.token,
            "password": password,
        }

        const headers = {
            "secretkey": "W13FTcnvpasf19z",
        }

        {
            password !== confirmPassword &&  password === null && confirmPassword === null && toast.error(`Passwords don't match`, e,
                { position: toast.POSITION.TOP_RIGHT });
        }
        
        {
            password === confirmPassword && handlePasswordReq(data, headers)
        }
    }

    return (
        <div className='flex flex-col lg:flex-row'>
            <aside class="sticky top-0 w-screen lg:w-2/5 h-screen">
                <Sidebar />
            </aside>
            <ToastContainer />
            <main className='flex flex-col ml-24'>
                <div className='flex flex-col mt-24'>
                    <div className='font-bold text-4xl opacity-70'>Reset Password</div>
                    <div className='mt-4 opacity-50 text-sm'>Please enter your new password. </div>
                </div>
                <GenericInputBox labelName='New Password'notBlank={true} onChange={(e)=>{setPassword(e.target.value)}} type={'password'}/>
                <GenericInputBox labelName='Confirm Password'notBlank={true} onChange={(e)=>{setConfirmPassword(e.target.value)}} type={'password'}/>
                <button className='bg-[#36104C] h-12 w-40 mt-8 rounded text-white hover:bg-white hover:text-[#36104C] hover:border-2 hover:border-[#36104C]' onClick={handleSubmit}>SUBMIT</button>
            </main>
            {/* {password !== null ? <GenericPasswordChecker password={password} /> : ""} */}
        </div>
    )
}

export default ResetPwd;
