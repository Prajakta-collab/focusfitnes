import React, { useState } from 'react';
import axios from 'axios';
import StaffNav from './Staff/StaffNav';
import { staffNavLinks } from '../Data/Data';
import { baseUrl } from '../configs/urlConfigs';
import { getCredentials } from '../Credentials/creds';

const AddMember = () => {

  
  const [otpSent, setOtpSent] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(false);
const [otp,setOtp]=useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    shift: '',
    height: '',
    weight: '',
    age: '',
    email: '',
    mobile_no: '',
    duration: '',
   
  });

  const checkIfEmpty = (requiredFields) => {
    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill in the ${field} field.`);
        return false;
      }
    }
    return true;
  };

  const handleGetOtp = async () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'mobile_no', 'duration'];
    if (!checkIfEmpty(requiredFields)) return;

    try {
      console.log("formdata",formData)
      const sendOtpResponse = await axios.post(`${baseUrl}/auth/signup-otp/send-email`, {},
       { headers: { email: formData.email },}
      );

      if (sendOtpResponse.status === 200) {
        setOtpSent(true);
        alert('OTP sent to your email.');
      } else {
        alert('Failed to send OTP.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    
  };

  const handleChangeOtp=(e)=>{
    setOtp(e.target.value);
    if(otp){
      setIsOtpValid(true);

    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = await getCredentials();


    try {
      const createUserResponse = await axios.post(`${baseUrl}/auth/signup`, formData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*' ,
            'otp':otp
            
            // This header is typically set on the server side, not in client requests
          },
      });

      if (createUserResponse.status === 200) {
        alert('User created successfully.');
        window.history.back();
      } else {
        alert('Failed to create user.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <StaffNav nav="true" navLinks={staffNavLinks} />
      <div className="mx-auto p-6 bg-white rounded-lg shadow-md mt-32 ">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 font">Create New Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 'firstName', label: 'First Name', type: 'text' },
              { id: 'lastName', label: 'Last Name', type: 'text' },
              { id: 'shift', label: 'Shift', type: 'text' },
              { id: 'height', label: 'Height', type: 'text' },
              { id: 'weight', label: 'Weight', type: 'text' },
              { id: 'age', label: 'Age', type: 'text' },
              { id: 'email', label: 'Email', type: 'email' },
              { id: 'password', label: 'Password', type: 'text' },


              { id: 'mobile_no', label: 'Mobile', type: 'text' },
              
            ].map(({ id, label, type }) => (
              <div className="mb-4" key={id}>
                <label className="block text-gray-700 text-sm font-bold mb-2 font" htmlFor={id}>
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 font" htmlFor="membership">
                Membership Plan
              </label>
              <select
                id="duration"
                value={formData.duration}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option className="font" value="">Select Plan</option>
                <option className="font" value="1">1 Month Plan</option>
                <option className="font" value="3">3 Months Plan</option>
                <option className="font" value="6">6 Months Plan</option>
                <option className="font" value="12">12 Months Plan</option>
              </select>
            </div>
            <div className="mb-4 col-span-1 md:col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2 font" htmlFor="otp">
                OTP
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={handleChangeOtp}
                  className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                  disabled={!otpSent}
                />
                <button type="button" onClick={handleGetOtp} className="bg-[orangered] font text-white hover:bg-gray-300 hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Get OTP
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button type="submit" disabled={!isOtpValid} className="bg-[orangered] font text-white hover:bg-gray-300 disabled:bg-gray-300 disabled:text-black hover:text-black font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline lg:h-14 ">
              Create Member
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddMember;
