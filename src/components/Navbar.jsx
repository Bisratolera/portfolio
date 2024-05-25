import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import profile from '../assets/profile.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Fade>
        <nav className='flex flex-row items-center justify-center gap-24  py-2 px-4 md:px-8 z-50'>
          <img className='h-12' src={profile} alt="Profile" /> 
          <ul className="hidden md:flex flex-row items-center justify-center space-x-8">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Works</a></li>
            <li><a href="/">Certifications</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 focus:outline-none">
              <svg className={`w-6 h-6 ${isOpen ? '' : ''}`} fill="none" stroke="rgb(255 107 203 )" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <ul className={`md:hidden text-[12px] flex flex-col space-y-2  ${isOpen ? 'block' : 'hidden'}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/">Works</a></li>
            <li><a href="/">Certifications</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
      </Fade>
    </div>
  );
}

export default Navbar;
