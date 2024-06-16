import React, { useState } from 'react';
import img7 from '../assets/img-7.jpg';
import logolight from '../assets/Logo-Light.png';
import logodark from '../assets/Logo-Dark.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setCredentials } from '../Credentials/creds';
import Loader from '../Components/Loader';
import { baseUrl } from '../configs/urlConfigs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    usertype: 'ROLE_USER'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    console.log("name ", name + " value ", value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onLogin = (e) => {
    e.preventDefault();

    console.log("login got clicked");
    console.log("body", formValues);
    setLoading(true);

    const instance = axios.create({
      baseURL: `${baseUrl}/auth/login`,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    instance.post('', {
      username: formValues.email,
      password: formValues.password,
      usertype: formValues.usertype
    })
      .then(response => {
        setLoading(false);
        console.log('res', response);

        if (response?.status === 200) {
          if (response?.data?.success === true) {
            console.log('Login Successful');
            setCredentials(response?.data?.token);

            if(formValues.usertype=='ROLE_USER'){
              navigate('/clientdashboard');

            }else if(formValues.usertype=='ROLE_STAFF'){
              navigate('/staffdashboard');

            }else if(formValues.usertype=='ROLE_ADMIN'){
              navigate('/admindashboard');

            }

          } else {
            console.log("error_msg", response?.data?.message);
            setErrortext(response?.data?.message || "Unexpected error occurred");
          }
        } else {
          console.log("Unexpected status code", response?.status);
          setErrortext(`Unexpected status code: ${response?.status}`);
        }
      })
      .catch(error => {
        setLoading(false);
        if (error.response) {
          console.error("Server responded with an error", error.response);
          setErrortext(error.response?.data?.message || "Server error occurred");
        } else if (error.request) {
          console.error("No response received from server", error.request);
          setErrortext("No response received from server");
        } else {
          console.error("Error setting up request", error.message);
          setErrortext("Error setting up request: " + error.message);
        }
      });
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row ">
      <Loader loading={loading} />
      {/* Left Side with Background Image */}
      <div className="w-full md:w-1/2 bg-black relative hidden md:block">
        <img
          src={img7}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <img
              src={logodark}
              alt="Logo"
              className="mx-auto mb-4"
            />
          </div>
        </div>
      </div>

      {/* Right Side with Login Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white py-8 ">
        <div className="w-full max-w-md p-8">
          {/* Logo on Mobile */}
          <div className="md:hidden mb-8 text-center">
            <img
              src={logolight}
              alt="Logo"
              className="mx-auto mb-4"
            />
          </div>
          <h2 className="text-3xl font-bold mb-6 ">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 font"
                placeholder="Enter your email"
                value={formValues.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 font">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 font"
                placeholder="Enter your password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon className="pt-6" icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font">User Type</label>
              <select
                name="usertype"
                value={formValues.usertype}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 font"
              >
                <option className="font" value="ROLE_ADMIN">Admin</option>
                <option className="font" value="ROLE_USER">Client</option>
                <option className="font" value="ROLE_STAFF">Staff</option>
              </select>
            </div>
            {errortext && (
              <div className="mb-4 text-red-500">
                {errortext}
              </div>
            )}
            <div className="mb-6">
              <button
                className="w-full bg-[orangered] text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 font"
                onClick={onLogin}
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800 font">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
