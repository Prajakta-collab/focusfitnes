import React, { useState } from 'react';
import StaffNav from './Staff/StaffNav';
import { staffNavLinks } from '../Data/Data';

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
      <td className="px-6 py-4 whitespace-nowrap text-lg">{member.name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-lg">{member.shift}</td>
      <td className="px-6 py-4 whitespace-nowrap text-lg">{member.phone}</td>
      <td className="px-6 py-4 whitespace-nowrap text-lg">{member.email}</td>
    </tr>
  );
};

const MembersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle member row click
  const handleMemberClick = (id) => {
    // history.push(`/members/${id}`);
  };

  return (
    <div>
    <StaffNav nav="true" navLinks={staffNavLinks}/>
    <div className="max-w-7xl mx-auto px-4 py-8 text-lg mt-28">
      <h1 className="text-4xl font-bold mb-4">Members Details</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">Shift</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">Email</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {membersData
            .filter((member) => member.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((member) => (
              <MemberRow key={member.id} member={member} onClick={handleMemberClick} />
            ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default MembersPage;
