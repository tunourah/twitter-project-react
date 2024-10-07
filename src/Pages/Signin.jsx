import React, { useState } from 'react';
import axios from 'axios'; // Import axios

const Signin = () => {
  // State management for form inputs
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(''); // Add error state for displaying error messages

  const validateForm = () => {
    let formErrors = '';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      formErrors += 'Please enter a valid email address. ';
    }

    // Username validation
    if (!username) {
      formErrors += 'Username is required. ';
    }

    // Password validation
    if (!password) {
      formErrors += 'Password is required. ';
    } else if (password.length < 6) {
      formErrors += 'Password must be at least 6 characters long. ';
    }

    setErrors(formErrors);
    return formErrors === ''; // Return true if no errors
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) {
      return; // Stop if there are validation errors
    }

    const newUser = { email, username, password };

    try {
      const response = await axios.post('https://670398d0ab8a8f892730c8c1.mockapi.io/registrations', newUser);
      
      // Check if the response is successful
      console.log('User registered successfully:', response.data);
      window.location.href = '/login'; // Redirect to login page after successful signup
    } catch (error) {
      // Handle errors, including validation errors
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log('Signup failed:', error.response.data.message);
        setErrors(error.response.data.message); // Set error message from response
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error signing up:', error.message);
        setErrors('Failed to sign up. Please try again.'); // General error message
      }
    }
  };

  return (
    <div>
      <div className='h-screen flex flex-col md:flex-row md:justify-around justify-center items-center bg-black p-5'>
        <div>
          <img
            src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=626&ext=jpg"
            alt="logo"
            className="rounded-full w-[60%] hover:border-gray-500"
          />
        </div>
        <div>
          <div>
            <h1 className='text-white font-extrabold text-4xl p-5'>Happening now</h1>
          </div>
          <div>
            <h1 className='text-white font-extrabold text-2xl p-5'>Join X today.</h1>
            <form className='flex flex-col gap-4' onSubmit={handleSignup}>
              <input
                type="text"
                placeholder='Email address'
                className='bg-gray-800 p-3 rounded-lg text-white'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder='User Name'
                className='bg-gray-800 p-3 rounded-lg text-white'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder='Password'
                className='bg-gray-800 p-3 rounded-lg text-white'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors && <p className='text-red-500'>{errors}</p>} {/* Display error messages */}
              <button className='bg-blue-500 p-3 rounded-lg text-white' type='submit'>
                Sign up
              </button>
            </form>
          </div>
          <div className='mt-5'>
            <h1 className='text-white font-extrabold text-2xl p-5'>Already have an account?</h1>
            <button className='text-blue-500 p-3 rounded-full border w-full border-gray-700 font-bold'>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
