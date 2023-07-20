// Componentent NavBar
import { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa';

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
    setLogo(!logo);
  };

  return (
    <nav className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>
          BEACHES.
        </h1>
      </div>

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
      </ul>

      <div className='hidden md:flex'>
        <BiSearch className='mr-2' size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburguer */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {mobileNav ? (
          <AiOutlineClose className='text-black' size={22} />
        ) : (
          <HiOutlineMenuAlt4 size={22} />
        )}
      </div>

      {/* Mobile Menu dropdown*/}
      <div
        onClick={handleNav}
        className={
          mobileNav
            ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'
            : 'md:hidden hidden'
        }
      >
        <ul>
          <h1>BEACHES.</h1>
          <li className='border-b text-center'>Home</li>
          <li className='border-b text-center'>Destinations</li>
          <li className='border-b text-center'>Travel</li>
          <li className='border-b text-center'>View</li>

          <div className='flex flex-col'>
            <button className='my-4'>Search</button>
            <button>Account</button>
          </div>

          <div className='flex justify-between my-8'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaInstagram className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
