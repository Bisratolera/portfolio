import { FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row p-24 md:p-10 lg:p-28 w-full h-20 mt-10 md:h-44 rounded-xl border-2 md:mt-44 justify-center">
        <div className="list flex flex-row md:flex-row gap-8 md:gap-10 items-center justify-center  text-4xl cursor-pointer text-[#FF6BCB]">
          <Fade direction="up"><a href="https://t.me/leultolera"><FaTelegram /></a></Fade>
          <Fade direction="up"><a href="https://facebook.com/leultolera"><FaFacebook /></a></Fade>
          <Fade direction="up"><a href="https://whatsapp.me/leultolera"><FaWhatsapp /></a></Fade>
          <Fade direction="up"><a href="https://github.com/bisratolera"><FaGithub /></a></Fade>
          <Fade direction="up"><a href="https://instagram.com/leultolera"><FaInstagram /></a></Fade>
        </div>
        <p className="flex flex-row md:flex-row gap-24 mx-8 md:gap-10 items-center justify-center">made with ❤️ by elites</p>
      </div>
    </div>
  );
};

export default Footer;
