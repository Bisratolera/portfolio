import { FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row p-4 md:p-10 lg:p-28 w-full h-20 mt-10 md:h-44 rounded-xl border-2 md:mt-44 justify-center">
        <div className="list flex flex-row md:flex-row gap-8 md:gap-10 items-center justify-center text-[#ff0c0c] text-4xl cursor-pointer">
          <Fade direction="up"><a href="https://t.me/leultolera"><FaTelegram /></a></Fade>
          <Fade direction="up"><a href="https://facebook.com/leultolera"><FaFacebook /></a></Fade>
          <Fade direction="up"><a href="https://whatsapp.me/leultolera"><FaWhatsapp /></a></Fade>
          <Fade direction="up"><a href="https://github.com/bisratolera"><FaGithub /></a></Fade>
          <Fade direction="up"><a href="https://instagram.com/leultolera"><FaInstagram /></a></Fade>
        </div>
      </div>
    </div>
  );
};

export default Footer;
