// src/App.js
import React ,{useState} from 'react';
import img7 from '../assets/img-7.jpg'
import logolight from '../assets/Logo-Light.png';
import logodark from '../assets/Logo-Dark.png'
import { useNavigate, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { setCredentials } from '../Credentials/creds';
import Loader from '../Components/Loader';


const Login=() =>{

  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('')

  

const onLogin=(e)=>{
  e.preventDefault();

  console.log("login got clicked")
  // axios
  // .post("http://localhost:8080/api/v1/auth/refreshToken", {
  //   token: "12bb4d21-f95f-4d67-9d0f-2ac3b0cc9b51",
  // })
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.log("error", err);
  // });

  setLoading(true);

  const instance = axios.create({
    baseURL: 'http://localhost:8080/api/v1/auth/login', 
      // Your Spring Boot backend
});

instance.post('',{
  username:"harsh@gmail.com",
  password:"demouser1"},{
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
.then(response => {
  //Hide Loader
  setLoading(false);
  console.log('res',response)

  // If server response message same as Data Matched
  if (response?.data?.success === true ) {
    console.log('Login Successful');
    // console.log(responseJson);

    //mmkv set storage
   
      setCredentials(response?.data?.token);
      navigate('/clientdashboard');
    
   


  } else {
    console.log("error_msg",response?.data?.message);
    setErrortext(response.data.message);
  }
})
.catch(error => {
  //Hide Loader
  setLoading(false);
  console.error(error);
});
}

    return (
        <div className="flex min-h-screen flex-col md:flex-row">
        <Loader loading={loading}/>
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
               {/* <h1 className="text-white text-4xl font-bold">Welcome Back</h1>
    <p className="text-orange-500">Please login to your account</p>*/}
              </div>
            </div>
          </div>
    
          {/* Right Side with Login Form */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white py-8">
            <div className="w-full max-w-md p-8">
              {/* Logo on Mobile */}
              <div className="md:hidden mb-8 text-center">
                <img
                  src={logolight}
                  alt="Logo"
                  className="mx-auto mb-4"
                />
              </div>
              <h2 className="text-3xl font-bold mb-6">Login</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-6">
                  <button
                    className="w-full bg-[orangered] text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
                    onClick={onLogin}
                  >
                    Login
                  </button>
                </div>
                <div className="text-center">
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
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

