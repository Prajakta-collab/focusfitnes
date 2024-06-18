import React, { useState, useEffect } from 'react';
import focuslogo from "../assets/Logo-Dark.png";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { getCredentials } from '../Credentials/creds';

const Nav = ({ type, nav, navLinks,role }) => {
  const [openNav, setOpenNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [roleDashboardLink, setroleDashboardLink] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await getCredentials();
      setIsLoggedIn(!!token);
      console.log("role",role)
      if(role=='user'){
        setroleDashboardLink('/clientdashboard')

      }else if(role=='staff'){
        setroleDashboardLink('/staffdashboard')

      }else{
        setroleDashboardLink('/admindashboard')

      }
      // Set isLoggedIn to true if token exists
    };
    
    checkLoginStatus();
  }, [role]);

  const navigateLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    // Add logout logic here
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className={`w-full ${nav ? "fixed bg-black duration-300 top-0 left-0 z-30" : "absolute"}`}>
      <nav className='max-w-[1540px] m-auto py-6 px-6 max-lg:px-12 flex justify-between items-center gap-14 max-xl:gap-5 max-sm:py-4 max-sm:px-6 relative'>
        <a href="#home" className=' font-semibold text-5xl flex justify-center items-center text-white gap-1'>
          <img src={focuslogo} alt="logo" width={170} height={60} />
        </a>

        <ul className={`flex flex-1 justify-end gap-10 max-xl:gap-7 max-lg:flex-col max-lg:bg-stone-700 max-lg:text-white max-lg:pt-10 max-lg:pb-3 max-lg:px-4 max-lg:gap-4 max-lg:absolute max-lg: max-lg:top-24 max-lg:left-[5%] max-lg:w-[90%] max-lg:z-20 max-sm:top-20 ${openNav ? 'max-lg:block' : 'max-lg:hidden'}`}>
          {navLinks.map((val) => (
            <li key={val.label} className={`text-white font-medium hover:text-red-500 text-xl max-lg:text-lg`}><a href={val.href}>{val.label}</a></li>
          ))}
          {isLoggedIn ? (
            <>
              <li className='text-white font-medium hover:text-red-500 text-xl max-lg:text-lg'>
                <a href={roleDashboardLink}>Dashboard</a>
              </li>
              <li className='text-white font-medium hover:text-red-500 text-xl max-lg:text-lg'>
                <button className='py-4 px-7 text-xl group relative text-white bg-[orangered] rounded-sm' onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li className='text-white font-medium hover:text-red-500 text-xl max-lg:text-lg'>
              <button className='py-4 px-7 text-xl group relative text-white bg-[orangered] rounded-sm' onClick={navigateLogin}>{type === 'user' ? 'Attendance' : 'Login'}</button>
            </li>
          )}
        </ul>

        <div className={`absolute right-[20px] translate-y-[-50%] text-2xl cursor-pointer top-[25px] ${openNav ? 'right-[20px]' : 'left-[20px]'}`} onClick={() => setOpenNav(!openNav)}>
          {openNav ? <IoClose style={{ color: '#ffffff' }} /> : <FiMenu />}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
