
import { Fade } from 'react-awesome-reveal';
import profile from '../assets/profile.png';


const Navbar = () => {
  return (
    <div>
      <Fade>
      <nav className='flex flex-row w-full items-center justify-center gap-8 py-2  z-50  ' >
        <img className='h-12 rounded-full border-[1.5px] border-2-full ' src={profile} alt="React Logo" />
        <ul className='flex justify-center p-4 bg-slate-300 bg-opacity-40 text-white rounded-full gap-7'>
          <li className=''><a href="/">Home</a></li>
          <li><a href='../About'>About</a></li>
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
