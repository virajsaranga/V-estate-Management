import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';

export default function SignIn() {
  const [formData, setFormData] = useState({})
  // const [error, setError] = useState(null);
  // const [loading, setLoading] =useStat(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    });
  }

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>
      Sign In 
    </h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
      
      <input type="text" placeholder='email' 
      className='border p-3 rounded-lg ' id='email' onChange={handleChange} />
      <input type="text" placeholder='password' 
      className='border p-3 rounded-lg ' id='password' onChange={handleChange} />

      <button   className='bg-slate-700 text-white p-3
      rounded-lg uppercase hover:opacity-75 disabled:opacity-80'> Singn In </button>
    </form>

    <div className='flex gap-2 mt-5'>
      <p>Dont have an account?</p>
      <Link to={"/sign-in"}>
        <span className='text-blue-700'> Sign Up</span>
      </Link>
    </div>
    </div>
  )
}
