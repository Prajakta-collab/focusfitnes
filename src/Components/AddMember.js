import React, { useState } from 'react';
import StaffNav from './Staff/StaffNav';
import { staffNavLinks } from '../Data/Data';

const AddMember = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    shift: '',
    height: '',
    weight: '',
    age: '',
    email: '',
    mobile: '',
    membership: '',
    otp: ''
  });

  const handleGetOtp = () => {
    // Implement OTP generation and sending logic here
    setOtpSent(true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
  };

  return (
    <>
      <StaffNav nav="true" navLinks={staffNavLinks} />
      <div className="mx-auto p-6 bg-white rounded-lg shadow-md mt-32 ">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 font">Create New Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 'firstname', label: 'First Name', type: 'text' },
              { id: 'lastname', label: 'Last Name', type: 'text' },
              { id: 'shift', label: 'Shift', type: 'text' },
              { id: 'height', label: 'Height', type: 'text' },
              { id: 'weight', label: 'Weight', type: 'text' },
              { id: 'age', label: 'Age', type: 'text' },
              { id: 'email', label: 'Email', type: 'email' },
              { id: 'mobile', label: 'Mobile', type: 'text' },
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
                id="membership"
                value={formData.membership}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option className="font" value="">Select Plan</option>
                <option className="font" value="Basic">Basic</option>
                <option className="font" value="Standard">Standard</option>
                <option className="font" value="Premium">Premium</option>
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
                  value={formData.otp}
                  onChange={handleChange}
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
            <button type="submit" className="bg-[orangered] font text-white hover:bg-gray-300 hover:text-black font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline lg:h-14 ">
              Create Member
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddMember;
