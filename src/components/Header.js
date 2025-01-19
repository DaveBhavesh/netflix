import React from 'react'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';


const Header = () => {

const navigate = useNavigate();

const user = useSelector((store)=> store.user);



const handleSignOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/");
  }).catch((error) => {
    // An error happened.
    navigate("/error");
  });
}

  return (
    
    <div className='flex justify-between absolute w-full  px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44'
            src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png'
            alt='logo'></img>
    {user && (<div className='flex p-2'>
    <img className='w-12 h-12 m-2 ' src={user.photoURL} alt='user icon'/>
    <button onClick={handleSignOut} className='bg-gray-400  font-bold h-12 w-24 m-2 rounded-lg'>Sign Out</button>
   </div>
    )}
    
   </div>
  )
}

export default Header
