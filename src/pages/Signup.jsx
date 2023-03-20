import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Signup = ({ children, isLogged }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(isLogged || false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted!');
    setIsLoggedIn(true);
    return <Navigate to="/login" />;
  };

  if (isLoggedIn) {
    return children; // Render the children components when logged in
  }

  return (
    <div>
      <div className="h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-white">
        <div className="h-16 bg-purple" />
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 py-11 text-center text-3xl font-extrabold text-purple">
            Sign up for your new account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    value={username}
                    onChange={handleUsernameChange}
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
