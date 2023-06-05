import React, { useState } from 'react';
import Sidebar from '../GenericComponent/Sidebar';
import { AiFillGithub } from 'react-icons/ai';
import GenericInputBox from '../GenericComponent/GenericInputBox';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { GoogleLogin } from '@react-oauth/google';

function SignIn() {

  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const [cookies, setCookies] = useCookies();
  const [token, setToken] = useCookies();
  const { setUserReady } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    var userData = {
      "email": email,
      "password": pwd,
    }
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, userData);
      const accessToken = res.data.token;
      const userId = res.data.user_id
      setCookies("user", userId, { path: '/', maxAge: 3600 })
      setToken("token", accessToken, { path: '/', maxAge: 3600 })
      setUserReady(true);
      accessToken ? navigate('/dashboardhome') : toast.error(`Something went wrong, Please try again`, res.data, { position: toast.POSITION.TOP_RIGHT });;
    }
    catch (err) {
      toast.error(`Something went wrong, Please try again`, err, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }


  let handleGoogleLogin = async (information) => {
    
    var data ={
      token:information,
      source:"google"
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/googlelogin`, data);
      const accessToken = res.data.token;
      const userId = res.data.user_id
      setCookies("user", userId, { path: '/', maxAge: 3600 })
      setToken("token", accessToken, { path: '/', maxAge: 3600 })
      setUserReady(true);
      accessToken ? navigate('/dashboardhome') : toast.error(`Something went wrong, Please try again`, res.data, { position: toast.POSITION.TOP_RIGHT });;
    }
    catch (err) {
      toast.error(`Something went wrong, Please try again`, err, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const handleSubmit = () => {
    { email && pwd && handleSignIn() }
    {
      !email && toast.warning('Fill up the email', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    {
      !pwd && toast.warning('Fill up the password', {
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
          <div className='font-bold text-4xl opacity-70'>Log In</div>
          <div className='mt-4 opacity-50 text-sm'>Don't have an account already? <Link to={'/signup'} className='underline pointer'>Sign Up</Link></div>
        </div>
        <GenericInputBox labelName='Email Address' type={'email'} notBlank={true} onChange={(e) => { setEmail(e.target.value) }} />
        <GenericInputBox labelName='Password' notBlank={true} onChange={(e) => { setPwd(e.target.value) }} type={'password'} />
        <Link to={'/frgtpwd'} className='underline pointer mt-2 opacity-50 text-sm'>Forget Password ?</Link>
        <button className='bg-[#36104C] h-12 w-40 mt-4 rounded text-white hover:bg-white hover:text-[#36104C] hover:border-2 hover:border-[#36104C]' onClick={handleSubmit}>LOG IN</button>
        <div className='flex flex-row mt-6 space-x-2 items-center justify-center'>
          <div className='border border-black w-52 h-0 opacity-50'></div>
          <div className='text-xs'>or</div>
          <div className='border border-black w-52 h-0 opacity-50'></div>
        </div>
        <div className='flex flex-row mt-6 space-x-2 justify-between'>
          <GoogleLogin onSuccess={credentialResponse => {
            console.log(credentialResponse);
            const information = (credentialResponse.credential);
            console.log(information);
            handleGoogleLogin(information)
          }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />
          <button className='border-2 rounded h-12 w-52 flex items-center justify-center hover:bg-black hover:text-white'><AiFillGithub /> <div className='text-sm ml-2'>Continue with Githiub</div></button>
        </div>
      </main>
    </div>
  )
}

export default SignIn