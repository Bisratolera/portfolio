import { useState, useEffect } from 'react';
import { FaYoutube } from "react-icons/fa";
import propic from "../assets/propic-hovered.png";
import newImage from "../assets/propic.jpeg"; 
import { Slide } from "react-awesome-reveal";

const Page = () => {
  const [currentImage, setCurrentImage] = useState(propic);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    let timer;
    const changeImage = () => {
      setCurrentImage(prevImage => prevImage === propic ? newImage : propic);
      setGlitchActive(true); 
      timer = setTimeout(() => {
        setGlitchActive(false); 
      }, 100);
      timer = setTimeout(changeImage, 200);
    };
    changeImage();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:justify-center my-20 sm:items-center md:mx-8">
      <div className="m-3 relative">
        <Slide direction="left">
          <img
            className={`glitch ${glitchActive ? 'glitch-active' : ''}  h-fit w-96`}
            src={currentImage}
            alt="Profile"
          />
        </Slide>
      </div>
      <div className="text-left">
        <div className="text-3xl text-white">
          my name is<span className="text-[#FF6BCB]">&nbsp; leul dereje</span>
        </div>
        <div className="pt-2 md:pt-3 text-l text-justify">
          <p>
            also im a content creator at elites and on my own channel called the
            sudo guy both channels have a lot of good stuffs you should have to
            <a href="https://www.youtube.com/@thesudoguyofficial">
              subscribe to my channel <FaYoutube className="yt text-red-500 text-3xl" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
