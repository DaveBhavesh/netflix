import React, { useState, useRef } from 'react'
import Header from './Header'
import {checkValidData} from"../utils/validate"
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {


  const [isSignInForm, setIsSignInForm] =useState(true);

  const[errorMessage,setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm)

  }

  
  const handleButtonClick = () => {
      //Validate the form data 

      console.log(email.current.value);
      console.log(password.current.value);

      const message = checkValidData(email.current.value, password.current.value);
      console.log(message);
      setErrorMessage(message);

      if(message===null){
        // Signup/SignIn
        if(!isSignInForm){
          //SignUp Logic 
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
         // Signed up 
        const user = userCredential.user;
        console.log(user);
           // ...
              })
         .catch((error) => {
            const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage(errorCode + "-" + errorMessage)
             console.log(error);
          });
        }

        else{
          // SignIn Logic
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

        }
      }

    }
  return (
    <div>
     <Header/>
     <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_medium.jpg'
             alt='bg'/>   
    </div>
  
    <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-72 mx-auto right-0 left-0 bg-opacity-70'>

      <h1 className='text-white text-2xl font-bold '>{isSignInForm ? "Sign In" : "Sign Up" }</h1>

      {!isSignInForm && <input type='text' placeholder='Full Name' className='text-white p-2 my-4 rounded-lg w-full bg-gray-500 border-2 ' />}

      <input ref={email} type='text' placeholder='Email Address' className='text-white p-2 my-4 rounded-lg w-full bg-gray-500 border-2 '/>
      <br/>

      <input ref={password} type='password' placeholder='Password' className='text-white p-2 my-4 rounded-lg w-full bg-gray-500 border-2 ' />
      <br/>

      <p className='p-2 m-2 text-lg  font-bold text-red-600'>{errorMessage}</p>
      
      <button onClick={handleButtonClick} className=' w-full  p-4 my-4 text-white  border-2 rounded-lg border-white bg-red-700 '> {isSignInForm ? "Sign In" : "Sign Up" }</button>
      
      <p onClick={toggleSignInForm} className=' cursor-pointer text-white font-bold'>{isSignInForm ? "New to Netflix ? Sign Up Now" : "Already an user? Sign In Now" }</p>

    </form>

 
    </div>
  )   
}

export default Login
