import { FaGithub, FaTelegram, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center ">
        {/* Social Icons */}
        <div className="flex flex-row gap-4 md:gap-8 mb-4 md:mb-0 text-2xl md:text-3xl lg:text-4xl text-[#32f1ff]">
          <Fade direction="up">
            <a href="https://t.me/leultolera" aria-label="Telegram" className="hover:text-[#0088cc] transition-colors duration-300">
              <FaTelegram />
            </a>
          </Fade>
          <Fade direction="up">
            <a href="https://facebook.com/leultolera" aria-label="Facebook" className="hover:text-[#3b5998] transition-colors duration-300">
              <FaFacebook />
            </a>
          </Fade>
          <Fade direction="up">
            <a href="https://whatsapp.me/leultolera" aria-label="WhatsApp" className="hover:text-[#25D366] transition-colors duration-300 ">
              <FaWhatsapp />
            </a>
          </Fade>
          <Fade direction="up">
            <a href="https://github.com/bisratolera" aria-label="GitHub" className="hover:text-[#333] transition-colors duration-300">
              <FaGithub />
            </a>
          </Fade>
          <Fade direction="up">
            <a href="https://instagram.com/leultolera" aria-label="Instagram" className="hover:text-[#E1306C] transition-colors duration-300">
              <FaInstagram />
            </a>
          </Fade>
        </div>
        
        {/* Footer Text */}
        <p className="text-sm md:text-base lg:text-lg text-center md:text-right">
          Made with ❤️ by Elites
        </p>
<div className="bg-gradient-to-r from-[#CBF9FF] to-[#415052] blur-[120px]  text-white py-10 px-4 md:px-10 lg:px-28 z-0">
      </div>
    </div>
  );
};

export default Footer;
