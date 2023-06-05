import React, { useState } from 'react';
import Sidebar from '../GenericComponent/Sidebar';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from "react-router-dom";
import GenericInputBox from '../GenericComponent/GenericInputBox';
import { ToastContainer, toast } from 'react-toastify';

function SignUp() {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState();
    const [secondName, setSecondName] = useState();
    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();

    const handleSubmit = () => {
        { firstName && secondName && email && pwd && navigate('/signupprofile') }
        {
            !firstName && toast.warning('Fill the first name', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        {
            !secondName && toast.warning('Fill the last name', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        {
            !email && toast.warning('Fill the email', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        {
            !pwd && toast.warning('Fill the password', {
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

    return (
        <div className='flex flex-col lg:flex-row'>
            <aside class="sticky top-0 w-screen lg:w-2/5 h-screen">
                <Sidebar />
            </aside>
            <ToastContainer />
            <main className='flex flex-col ml-24'>
                <div className='flex flex-col mt-24'>
                    <div className='font-bold text-4xl opacity-70'>Sign Up</div>
                    <div className='mt-4 opacity-50 text-sm'>Have an account already? <Link to={'/signin'} className='underline pointer'>Log In</Link></div>
                </div>
                <div className='flex flex-row space-x-2'>
                    <GenericInputBox labelName='First Name' width='12' notBlank={true} onChange={(e) => { setFirstName(e) }} />
                    <GenericInputBox labelName='Last Name' width='12' notBlank={true} onChange={(e) => { setSecondName(e) }} />
                </div>
                <GenericInputBox labelName='Email Address' notBlank={true} onChange={(e) => { setEmail(e) }} type={'email'} />
                <GenericInputBox labelName='Password' notBlank={true} onChange={(e) => { setPwd(e) }} type={'password'} />
                <button className='bg-[#36104C] h-12 w-40 mt-4 rounded text-white hover:bg-white hover:text-[#36104C] hover:border-2 hover:border-[#36104C]' onClick={handleSubmit}>Create Account</button>
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
                    <button className='border-2 rounded h-12 w-52 mt-4 flex items-center justify-center hover:bg-black hover:text-white'><AiFillGithub /> <div className='text-sm ml-2'>Continue with Githiub</div></button>
                </div>
            </main>
        </div>
    )
}

export default SignUp