import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[issignInForm , setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!issignInForm);
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix-background"/>
        </div>
        <form className='w-3/12 absolute my-36 mx-auto left-0 right-0 p-12 bg-black bg-opacity-80 text-white'>
            <h1 className='font-bold text-3xl py-4 text-white'> {issignInForm? 'Sign In' : 'Sign Up'}</h1>
            {!issignInForm && 
            <input type="name" placeholder='Enter your name' className='p-2 my-2 w-full bg-gray-800 rounded-lg '/>}
            <input type="email" placeholder='Email address' className='p-2 my-2 w-full bg-gray-800 rounded-lg '/>
            <input type="password" placeholder='Password' className='p-2 my-2 w-full bg-gray-800 rounded-lg'/>
            <button type="submit" className='p-4 my-4 bg-red-700 rounded-lg text-white w-full'>{issignInForm? 'Sign In' : 'Sign Up'}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{issignInForm? 'New to Netflix? Sign-up here' : 'Already Registered, Sign In now'}</p>
        </form>
    </div>
  )
}

export default Login