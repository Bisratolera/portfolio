import { FaYoutube } from "react-icons/fa";
import propic from "../assets/propic.jpeg";
import { Slide } from "react-awesome-reveal";

const Page = () => {
  return (
    <div className="grid grid-cols-2 sm:justify-center my-20 sm:items-center md:mx-8">
      <div className="m-3">
        <Slide direction="left">
          <img
            className="xl:rounded-tl-[120px] xl:rounded-br-[120px] sm:rounded-tl-[120px] sm:rounded-br-[120px] md:rounded-tl-[120px] md:rounded-br-[120px] p-2 h-fit w-96 "
            src={propic}
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
