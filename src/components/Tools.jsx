import { Fade } from "react-awesome-reveal";
import { FaGithub, FaPython, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop, SiAffinitydesigner, SiBlender, SiCisco, SiFlutter, SiObsstudio, SiPrisma, SiWondersharefilmora } from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";

const Tools = () => {
  return (
    <Fade> 
      <div className="min-h-screen flex flex-col items-center justify-center text-center mt-4 md:mt-20 ">
        <h1 className="text-4xl font-bold mb-8 text-white">Tools</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 bg-gradient-to-b from-[#304847] to-[#668888] p-8 rounded-[35px] w-11/12  md:w-3/4">
          <div className="card text-white p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Audio Visuals</h2>
            <div className="icons flex flex-row items-center gap-4 text-3xl">
              <FaGithub />
              <SiAdobephotoshop />
              <SiAffinitydesigner />
              <FiFigma />
              <SiBlender />
              <SiWondersharefilmora />
            </div>
          </div>
          <div className="card text-white p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Others</h2>
            <div className="icons flex flex-row items-center gap-4 text-3xl">
              <SiCisco />
              <SiObsstudio />
              <FaGithub />
              <TbBrandOffice />
            </div>
          </div>
          <div className="card text-white p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Language and Frameworks</h2>
            <div className="icons flex flex-row items-center gap-4 text-3xl">
              <FaPython />
              <IoLogoJavascript />
              <SiFlutter />
              <SiPrisma />
              <FaReact />
              <RiTailwindCssFill />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Tools;
