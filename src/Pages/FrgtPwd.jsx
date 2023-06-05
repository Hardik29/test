import React, { useState } from 'react';
import Sidebar from '../GenericComponent/Sidebar';
import GenericInputBox from '../GenericComponent/GenericInputBox';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


function FrgtPwd() {
  const [email, setEmail] = useState("");

  const handelSubmit = async () => {
    var data = {
      'email': email
    }
    
    var headers = {
      'secretkey': process.env.REACT_APP_SECRET_KEY,
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/forgetpassword`, data, { headers });
      toast.success(`Email Sent !`, res, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    catch (err) {
      toast.error(`Something went wrong, Please try again`, err, {
        position: toast.POSITION.TOP_RIGHT
      });
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
          <div className='font-bold text-4xl opacity-70'>Forget Password</div>
          <div className='mt-4 opacity-50 text-sm'>Don't worry! It happens to the best of us. We got you covered!</div>
          <div className='opacity-50 text-sm'>Please enter your email and we will send you a link to reset your password.</div>
        </div>
        <GenericInputBox labelName='Email Address' type={'email'} notBlank={true} onChange={(e) => { setEmail(e.target.value) }} />
        <button className='bg-[#36104C] h-12 w-40 mt-8 rounded text-white hover:bg-white hover:text-[#36104C] hover:border-2 hover:border-[#36104C]' onClick={handelSubmit}>SUBMIT</button>
      </main>
    </div>
  )
}

export default FrgtPwd