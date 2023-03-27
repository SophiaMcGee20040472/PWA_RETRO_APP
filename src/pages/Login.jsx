import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFavourites } from "../redux/features/favouriteChoice";
import { setIsLoggedIn } from "../redux/features/loginSlice";
import { setUserId } from "../redux/features/userSlice";

const Login = ({ children }) => {
  const navigate = useNavigate();

  const loginState = useSelector((state) => state.login);
  const { isLoggedIn } = loginState;
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch("http://laptop-bt76t6rn:4000/api/users/authenticate", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    }).then((res) => {
      const { status } = res;
      if (status === 201) {
        res.json().then((response) => {
          const {
            user: { _id, favourites },
          } = response;
          dispatch(setUserId(_id));
          dispatch(addFavourites(favourites));
        });
        dispatch(setIsLoggedIn(true));
        navigate("/");
      } else {
        dispatch(setIsLoggedIn(false));
        navigate("/login");
      }
    });
  };

  if (isLoggedIn) {
    return children; // Render the children components when logged in
  }

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
                padding: "5px",
                backgroundColor: "violet",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              NOT A MEMBER..SIGN UP
            </div>
          </div>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className=" py-4 text-center text-md font-extrabold text-purple">
            SIGN UP FOR YOUR NEW ACCOUNT
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
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
