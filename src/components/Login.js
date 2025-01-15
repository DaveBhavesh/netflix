import React, { useState } from 'react'
import Header from './Header'

const Login = () => {


  const [isSignInForm, setIsSignInForm] =useState(true);

  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
     <Header/>
     <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_medium.jpg'
             alt='bg'/>   
    </div>
  
    <form className='w-3/12 absolute p-12 bg-black my-72 mx-auto right-0 left-0 bg-opacity-70'>
      <h1 className='text-white text-2xl font-bold '>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
      <input type='text' placeholder='Email Address' className='text-white p-2 my-4 rounded-lg w-full bg-gray-500 border-2 '/>
      <br/>
      <input type='password' placeholder='Password' className='text-white p-2 my-4 rounded-lg w-full bg-gray-500 border-2 ' />
      <br/>
      <button className=' w-full  p-4 my-4 text-white  border-2 rounded-lg border-white bg-red-700 '> {isSignInForm ? "Sign In" : "Sign Up" }</button>
      <p onClick={toggleSignInForm} className=' text-white font-bold'>{isSignInForm ? "New to Netflix ? Sign Up Now" : "Already an user? Sign In" }</p>

    </form>

 
    </div>
  )   
}

export default Login
