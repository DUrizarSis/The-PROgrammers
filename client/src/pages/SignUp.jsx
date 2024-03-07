import React, { useState } from 'react'
import Logo from '../assets/light-wcom.png';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import axios from 'axios';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if(data.success === false) {
          return setErrorMessage(data.message);
      }
      setLoading(false);
      if(response.ok) {
        return navigate('/log-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-8'>

        {/* Left side */}
        <div  className='flex-1'>
          <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark: text-white'>
            <img className='h-6 md:h-9 mx-auto mb-2' src={Logo} alt="The PROgrammers Logo" />
          </Link>
          <p className='text-2sm font-bold text-center pt-2 text-purple-800'>Join the best community of Programmers!</p>
          <p className='text-sm text-center mt-4'>
            Sign Up with you email or with Google!
          </p>
        </div>

        {/* Left side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/>
            </div>
            <div>
              <Label value='Your email' />
              <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
            </div>
            <Button color='purple' type='submit' disabled={loading}>
              {
                loading ? (
                  <><Spinner size='sm' /><span className='pl-3'>Loading...</span></>
                ) : 'Sign Up' 
              }
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/log-in' className='text-purple-800'>
              Log In
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
        
      </div>
    </div>
  )
}
