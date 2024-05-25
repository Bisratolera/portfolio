import main from "../assets/main.jpg";
import { Slide } from "react-awesome-reveal";
import vector from "../assets/Vector.svg";

const Page = () => {
  return (
    <div className="grid grid-cols-2 gap-20 sm:justify-center my-20 sm:items-center md:mx-8">
      <div className="">
        <Slide direction="left">
          <img src={vector} className="h-10" alt="" />
          <img
            className="rounded-[200%] rounded-bl-full p-2 h-3/4 ring-8 ring-[#304847]"
            src={main}
            alt="Profile"
          />
        </Slide>
      </div>
      <div className="text-left">
        <div className="text-3xl">
          my name is<span className="text-[#FF6BCB]">&nbsp; leul dereje</span>
        </div>
        <div className="pt-2 md:pt-3 text-l text-justify">
          <p>
            also im a content creator at elites and on my own channel called the
            sudo guy both channels have a lot of good stuffs you should have to
            <a href="https://www.youtube.com/@thesudoguyofficial">subscribe to my channel</a>😁
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
