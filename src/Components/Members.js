import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import StaffNav from './Staff/StaffNav';
import { staffNavLinks } from '../Data/Data';
import { useNavigate } from 'react-router-dom';
import { getCredentials } from '../Credentials/creds';
import axios from 'axios';
import { baseUrl } from '../configs/urlConfigs';

// Sample data for members
const membersData = [
  { id: 1, name: 'John Doe', shift: 'Morning', phone: '1234567890', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', shift: 'Evening', phone: '9876543210', email: 'jane@example.com' },
  // Add more members here
];

// MemberRow component to render each member row
const MemberRow = ({ member, onClick }) => {
  return (
    <tr onClick={() => onClick(member.id)} className="cursor-pointer hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-xl font">{member.firstName+" "+member?.lastName}</td>
      <td className="px-6 py-4 whitespace-nowrap text-xl font">{member.shift}</td>
      <td className="px-6 py-4 whitespace-nowrap text-xl font">{member.mobile_no}</td>
      <td className="px-6 py-4 whitespace-nowrap text-xl font">{member.email}</td>
    </tr>
  );
};

const MembersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allMembers, setallMembers] = useState([])
  const navigate = useNavigate();

  // Function to handle member row click
  const handleMemberClick = (id) => {
    navigate(`/members/${id}`);
  };
  const fetchAllMembers = async () => {

    try {
      const token = await getCredentials();
  
     
        const response = await axios.get(`${baseUrl}/user/all_users`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*' ,
            
            // This header is typically set on the server side, not in client requests
          }
        });
        
        if(response?.status==200){
          //console.log(response?.data)
          setallMembers(response?.data)
        }else{
          console.log("error", response.status+" "+"message",response?.data?.message)
        }

        console.log("Response:", response.data);


      
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(()=>{
//fetchAllMembers()
  },[])

  const addMember=()=>{
    navigate('/members/add')}

  return (
    <div>
      <StaffNav nav="true" navLinks={staffNavLinks} />
      <div className="mx-auto px-4 py-8 text-lg mt-28 relative">
        <h1 className="text-4xl font-bold mb-4 font">Members Details</h1>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200 mt-4">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider font">Name</th>
              <th className="px-6 py-3 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider font">Shift</th>
              <th className="px-6 py-3 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider font">Phone</th>
              <th className="px-6 py-3 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider font">Email</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 font">
            {membersData
              ?.filter((member) => (member?.firstName+" "+member?.lastName).toLowerCase().includes(searchTerm.toLowerCase()))
              ?.map((member) => (
                <MemberRow key={member.id} member={member} onClick={handleMemberClick} />
              ))}
          </tbody>
        </table>

        {/* Floating Plus Icon Button */}
        <button
          className="fixed bottom-8 right-8 bg-[orangered] text-white p-4 rounded-full shadow-lg hover:bg-gray-300 hover:text-black focus:outline-none flex items-center justify-center"
          onClick={addMember} // Add your onClick handler here
        >
          {/* Conditionally render label and icon based on screen size */}
          <span className="hidden md:inline-block text-xl mr-2">Add New Member</span>
          <FontAwesomeIcon icon={faPlusCircle} className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default MembersPage;
