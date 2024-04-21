import { FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { Fade } from 'react-awesome-reveal';
const Footer = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row p-4 md:p-28 w-full h-auto md:h-44 rounded-xl border-2 md:mt-44 justify-center">
            <div className="list flex flex-row gap-20 items-center justify-center text-[#ff1818] text-4xl cursor-pointer ">
                <Fade direction="up"><FaTelegram /></Fade>
                <Fade direction="up"><FaFacebook /></Fade>
                <Fade direction="up"><FaWhatsapp /></Fade>
                <Fade direction="up"><FaGithub /></Fade>
                <Fade direction="up"><FaInstagram /></Fade>
        </div>
        
        </div>
        </div>
  )
}

export default Footer
