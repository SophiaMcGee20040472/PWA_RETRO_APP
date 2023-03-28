// Import necessary libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define a functional component named Signup
const Signup = ({ children, isLogged }) => {
// Use the useNavigate hook from react-router-dom to navigate to different routes
  const navigate = useNavigate();

  // Define states for email, password, first name, last name, and whether the user is logged in or not
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(isLogged || false);

  // Define functions to handle changes in email, password, first name, and last name input fields
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlefirstNameChange = (event) => {
    setfirstName(event.target.value);
  };

  const handlelastNameChange = (event) => {
    setlastName(event.target.value);
  };

  // Define a function to handle submission of the signup form
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send a POST request to the server with the user's information
    await fetch('http://LAPTOP-BT76T6RN:4000/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        password,
        email,
      }),
    }).then((res) => {
      const { status } = res;

      // If the server responds with a status code of 201 (created), navigate to the login page
      if (status === 201) {
        navigate('/login');

      // If the server responds with any other status code, stay on the signup page
      } else {
        navigate('/signup');
      }
    });
  };

  // If the user is already logged in, render the children components
  if (isLoggedIn) {
    return children;
  }

  // Otherwise, render the signup form

  return (
    <div>
      <div className="h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-gray">
        <div className="h-40 w-full bg-purple flex items-start">
          <img
            src="src\assets\Logo3.svg"
            alt="Purple section image"
            className="h-36"
          />
          <div className="ml-auto my-auto mr-4">
            <div
              style={{
                padding: '5px',
                backgroundColor: 'violet',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => {
                navigate('/login');
              }}
            >
              ALREADY A MEMBER...LOGIN
            </div>
          </div>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className=" py-4 text-center text-md font-extrabold text-purple">
            SIGN UP FOR YOUR NEW ACCOUNT
          </h2>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md pb-24">
          <div className="bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-white"
                >
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="firstName"
                    required
                    value={firstName}
                    onChange={handlefirstNameChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-white"
                >
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="lastName"
                    required
                    value={lastName}
                    onChange={handlelastNameChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-orange bg-grape hover:bg-grape focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
